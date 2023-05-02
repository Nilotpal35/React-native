import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../../Colors/Colors";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";

function ExpenseItemGridTile({ id, title, amount, date, description }) {
  console.log(
    "upcoming data for recent ",
    id,
    title,
    amount,
    date,
    description
  );
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const item = {
    id: id,
    title: title,
    amount: amount,
    date: date,
    description: description,
  };
  function editHandler() {
    navigation.navigate("MANAGE EXPENSES", { mode: "EDIT", value: item });
  }
  return (
    <Pressable
      style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}
      onPress={editHandler}
    >
      <View
        style={[
          styles.tileContainer,
          {
            backgroundColor:
              MODE === "LIGHT" ? Colors.reddish400 : Colors.primary300,
          },
        ]}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View
          style={[
            styles.amountBox,
            {
              width: width > 400 ? 140 : 120,
              backgroundColor:
                MODE === "LIGHT" ? Colors.reddish500 : Colors.primary600,
            },
          ]}
        >
          <Text style={[styles.title, { fontWeight: "500" }]}>
            {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItemGridTile;

const styles = StyleSheet.create({
  tileContainer: {
    marginHorizontal: 5,
    marginTop: 7,
    //backgroundColor: Colors.reddish400,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 60,
    borderRadius: 7,
    elevation: 5,
    shadowColor: Colors.white,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
    marginBottom: 5,
  },
  date: {
    fontWeight: 200,
    fontSize: 12,
    color: Colors.white,
  },
  amountBox: {
    //backgroundColor: Colors.reddish500,
    minHeight: 40,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    //padding: 7,
    borderRadius: 7,
  },
  date: {
    color: "white",
  },
});
