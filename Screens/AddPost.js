import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Store/redux/postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Colors } from "../Styles/Colors";
import Form from "../components/Post/Form";

const {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} = require("react-native");

function AddPost({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const posts = useSelector((state) => state.posts.posts);
  const marginTop = useSelector((state) => state.margin.marginTop);
  const dispatch = useDispatch();
  function buttonHandler() {
    console.log("PRESSED!");
    if (title.length < 3 || author.length < 3 || comment.length < 5) {
      Alert.alert("Warning", "please fill all the fields.");
      return;
    } else {
      const value = {
        id: nanoid(),
        author: author,
        title: title,
        comment: comment,
        emoji: {
          like: 0,
          dislike: 0,
          heart: 0,
          comment: 0,
        },
      };
      dispatch(addPost({ post: value }));
      setAuthor("");
      setTitle("");
      setComment("");
      navigation.navigate("View Post");
    }
  }
  const data = {
    title: title,
    setTitle: setTitle,
    author: author,
    setAuthor: setAuthor,
    comment: comment,
    setComment: setComment,
    buttonHandler: buttonHandler,
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView>
        <View style={[styles.container, { marginTop: marginTop }]}>
          <Form {...data} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: Colors.primary200,
  },
});
