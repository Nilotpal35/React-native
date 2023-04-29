import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmoji } from "../../Store/redux/postSlice";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import EditPostModal from "../../Modal/EditPost";
import { useNavigation } from "@react-navigation/native";
import Emoji from "../UI/Emoji";
import PostDesc from "./PostDesc";

function SinglePost({ id, title, author, comment, emoji }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const PROPS = {
    id: id,
    title: title,
    author: author,
    comment: comment,
  };

  const postDescValue = {
    popupModal: popupModal,
    title: title,
    comment: comment,
    author: author,
  };

  const emojiValue = {
    id: id,
    emoji: emoji,
  };

  function popupModal() {
    //setModaVisible(!modalVisible);
    navigation.navigate("Modal View", {
      ...PROPS,
    });
  }

  return (
    <View>
      <View style={styles.PressContainer}>
        <PostDesc {...postDescValue} />
        <Emoji {...emojiValue} />
      </View>
    </View>
  );
}
export default SinglePost;

const styles = StyleSheet.create({
  PressContainer: {
    //flex: 1,
    margin: 10,
    backgroundColor: "#EBEBEB",
    //height: 180,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 8,
    borderColor: "purple",
    padding: 10,
    flexDirection: "column",
  },
});
