import { Pressable, View, Text, StyleSheet } from "react-native";

function PostDesc({ popupModal, title, comment, author }) {
  return (
    <>
      <Pressable onPress={popupModal}>
        <View>
          <View>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "200",
                //color: "#C37ED3",
              }}
            >
              {comment}
            </Text>
          </View>
          <View>
            <Text style={{ textAlign: "right", fontSize: 10 }}>~{author}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}

export default PostDesc;

const styles = StyleSheet.create({
  titleContainer: {
    //marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "#B8BBB8",
    padding: 8,
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
