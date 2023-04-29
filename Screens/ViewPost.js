import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import SinglePost from "../components/Post/SinglePost";

const postViewGridTile = (itemData) => {
  const postProps = {
    id: itemData.item.id,
    title: itemData.item.title,
    comment: itemData.item.comment,
    author: itemData.item.author,
    emoji: itemData.item.emoji,
  };
  return <SinglePost {...postProps} />;
};

const ViewPost = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log("POSTS--", posts);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={postViewGridTile}
    />
  );
};

export default ViewPost;
