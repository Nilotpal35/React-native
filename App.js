import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [GoalItems, setGoalItems] = useState([]);

  const onGoalAddition = (goals) => {
    //setGoalItems([...GoalItems, goals]);
    setGoalItems((prevItems) => [...prevItems, goals]);
  };
  console.log(GoalItems);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Button
          title="Add Goal"
          onPress={() => {
            setModalIsVisible(!modalIsVisible);
          }}
        />
      </View>
      <View>
        {modalIsVisible && (
          <GoalInput
            onCancel={() => {
              setModalIsVisible(!modalIsVisible);
            }}
            onAddGoals={onGoalAddition}
          />
        )}
      </View>
      <View>
        {/* {GoalItems &&
          GoalItems.map((item) => (
            <Text key={item} style={styles.items}>
              {item}
            </Text>
          ))} */}
        <GoalItem items={GoalItems} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "space-evenly",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#bbbbbb",
  },
  text: {
    margin: 10,
    alignItems: "center",
    //backgroundColor: '#bbbbbb',
    //flexDirection: "column",
  },
  items: {
    margin: 10,
    padding: 10,
    alignItems: "flex-start",
    //backgroundColor: "",
    fontSize: 20,
    color: "white",
  },
});
