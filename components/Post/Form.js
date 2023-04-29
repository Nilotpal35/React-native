import {
  View,
  Text,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { addMargin, removeMargin } from "../../Store/redux/marginSlice";
import { StyleSheet } from "react-native";
import { Colors } from "../../Styles/Colors";

function Form({
  title,
  setTitle,
  author,
  setAuthor,
  comment,
  setComment,
  buttonHandler,
}) {
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  console.log("HEIGHT", height);
  return (
    <>
      <View style={[styles.content, { width: width - 90 }]}>
        <Text style={styles.text}>Title:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.titleInput}
            autoCorrect={false}
            //autoComplete="false"
            onPressIn={() => dispatch(addMargin({ height: 150 }))}
            onEndEditing={() => dispatch(removeMargin({ height: 10 }))}
            keyboardAppearance="dark"
          />
        </View>
      </View>
      <View style={[styles.content, { width: width - 90 }]}>
        <Text style={styles.text}>Author:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Author"
            value={author}
            onChangeText={setAuthor}
            style={styles.titleInput}
            onPressIn={() => dispatch(addMargin({ height: 120 }))}
            onEndEditing={() => dispatch(removeMargin({ height: 10 }))}
            keyboardAppearance="dark"
          />
        </View>
      </View>
      <View style={[styles.content, { width: width - 90 }]}>
        <Text style={styles.text}>Write Your Post:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your post here ...."
            value={comment}
            onChangeText={setComment}
            style={styles.postInput}
            multiline
            maxLength={1000}
            keyboardAppearance="dark"
          />
        </View>
      </View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, { opacity: 0.5 }] : styles.button
        }
        onPress={(e) => buttonHandler(e)}
      >
        <Text style={styles.buttonText}>Save Post</Text>
      </Pressable>
    </>
  );
}

export default Form;

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
  titleInput: {
    height: 50,
    fontSize: 18,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  postInput: {
    height: 150,
    padding: 10,
    //borderBottomWidth: 2,
    //borderBottomLeftRadius: 2,
    //borderBottomRightRadius: 2,
    borderColor: "#9915C6",
    fontSize: 18,
    borderRadius: 3,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: Colors.primary600,
    padding: 15,
    borderRadius: 7,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
