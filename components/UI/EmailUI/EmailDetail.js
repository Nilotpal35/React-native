import {
  Modal,
  Pressable,
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { GlobalColors } from "../../../utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeEmail } from "../../../store/redux/EmailSlice";

export default function EmailDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const deleteMailHandler = () => {
    const ID = route.params?.data.id;
    try {
      dispatch(removeEmail({ deleteId: ID }));
      console.log("DELETE - SUCCESS :) ");
      navigation.navigate("EMAIL");
    } catch (error) {
      console.log("DELETE - FAILED :(");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput
          editable={false}
          value={route.params?.data.title}
          style={styles.title}
        />
      </View>
      <View>
        <TextInput
          editable={false}
          value={route.params?.data.message}
          multiline
          scrollEnabled
          style={[styles.title, { height: 300 }]}
        />
      </View>
      <View>
        <TextInput
          editable={false}
          value={new Date(route.params?.data.date).toDateString()}
          style={styles.title}
        />
      </View>
      <View style={styles.icon}>
        <Pressable
          onPress={() => deleteMailHandler()}
          style={({ pressed }) => [pressed && { opacity: 0.5 }]}
        >
          <MaterialIcons
            name="cancel"
            size={60}
            color={GlobalColors.blue.blue200}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: `${GlobalColors.blue.blue100}1c`,
    flex: 1,
  },
  title: {
    //width : 150,
    marginHorizontal: 10,
    marginVertical: 15,
    height: 50,
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 8,
    fontWeight: "600",
    backgroundColor: GlobalColors.grey.grey300,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
});
