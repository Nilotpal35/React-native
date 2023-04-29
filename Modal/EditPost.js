import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { removePost, editPost } from "../Store/redux/postSlice";
import { Colors } from "../Styles/Colors";
import Form from "../components/Post/Form";

function EditPostModal({ route, navigation }) {
  const [editTitle, setEditTitle] = useState(route.params?.title);
  const [editAuthor, setEditAuthor] = useState(route.params?.author);
  const [editComment, setEditComment] = useState(route.params?.comment);
  const dispatch = useDispatch();
  function buttonHandler() {
    if (
      editTitle.length < 3 ||
      editAuthor.length < 3 ||
      editComment.length < 5
    ) {
      Alert.alert("Warning", "please fill all the fields.");
      return;
    } else {
      const value = {
        id: route.params?.id,
        author: editAuthor,
        title: editTitle,
        comment: editComment,
      };
      dispatch(editPost({ post: value }));
      navigation.navigate("View Post");
    }
  }
  const data = {
    title: editTitle,
    setTitle: setEditTitle,
    author: editAuthor,
    setAuthor: setEditAuthor,
    comment: editComment,
    setComment: setEditComment,
    buttonHandler: buttonHandler,
  };

  return (
    <>
      <View style={styles.modalContainer}>
        <View>
          <View style={styles.headerButtonContainer}>
            <Ionicons
              name="arrow-back"
              color={Colors.primary600}
              size={30}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <MaterialIcons
              name="delete"
              color={Colors.primary600}
              size={30}
              onPress={(e) => {
                dispatch(removePost({ id: route.params?.id }));
                navigation.navigate("View Post");
              }}
            />
          </View>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView>
              <View style={[styles.formContainer]}>
                <Form {...data} />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
}

export default EditPostModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  headerButtonContainer: {
    justifyContent: "space-between",
    margin: 20,
    flexDirection: "row",
  },
  formContainer: {
    //flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#CC95DF",
    marginBottom: 100,
  },
});
