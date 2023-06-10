import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [modalVisible, setModalVisible] = useState(false);

  const calendarHeader = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const getHeader = calendarHeader.map((item) => {
    return (
      <View style={[styles.calendar_box, { marginBottom: 15 }]}>
        <Text style={{ color: "black", fontWeight: "bold" }}>{item}</Text>
      </View>
    );
  });

  function getCalendar() {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const calendar = [];

    function pressHandler(year, month, date) {
      console.log(
        "clicked date",
        new Date(year, month, date).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setModalVisible(!modalVisible);
    }

    for (let i = 0; i < startDay; i++) {
      calendar.push(
        <View
          style={styles.calendar_empty_box}
          key={`empty-${JSON.stringify(new Date(i))}`}
        >
          <Text style={{ color: "white" }}></Text>
        </View>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <Pressable
          style={({ pressed }) => [
            pressed && { opacity: 0.5 },
            styles.calendar_box,
          ]}
          onPress={() => pressHandler(year, month, i)}
        >
          <View key={`full-${JSON.stringify(new Date(i))}`}>
            <Text style={{ color: "black", fontWeight: "500" }}>{i}</Text>
          </View>
        </Pressable>
      );
    }
    return calendar;
  }

  return (
    <>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        backdropColor="grey"
        style={{ backgroundColor: "white" }}
      >
        <View>
          <Text>Hi this is best modal</Text>
        </View>
      </Modal>
      <View style={styles.root}>
        <Text style={[styles.header]}>Calendar</Text>
        <View style={styles.calendar_outer_box}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
          >
            <Pressable
              style={({ pressed }) => [
                pressed && { opacity: 0.5 },
                { marginHorizontal: 10 },
              ]}
              onPress={() => setYear((cYear) => cYear - 1)}
            >
              <AntDesign name="left" size={20} color="white" />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                pressed && { opacity: 0.5 },
                { marginHorizontal: 13 },
              ]}
              onPress={() => setMonth((cMonth) => cMonth - 1)}
            >
              <AntDesign name="left" size={20} color="white" />
            </Pressable>
            <View>
              <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
                {new Date(year, month).toLocaleDateString("en-us", {
                  month: "long",
                  year: "numeric",
                })}
              </Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                pressed && { opacity: 0.5 },
                { marginHorizontal: 13 },
              ]}
              onPress={() => setMonth((cMonth) => cMonth + 1)}
            >
              <AntDesign name="right" size={20} color="white" />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                pressed && { opacity: 0.5 },
                { marginHorizontal: 10 },
              ]}
              onPress={() => setYear((cYear) => cYear + 1)}
            >
              <AntDesign name="right" size={20} color="white" />
            </Pressable>
          </View>
          <View style={{ width: 300, height: 250 }}>
            <View style={[styles.calendar]}>
              {getHeader}
              {getCalendar()}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    //marginTop : 50,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "rgb(80,35,77)",
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },

  calendar_empty_box: {
    alignItems: "center",
    justifyContent: "center",
    width: "14.28%", // 100% divided by 7 columns
    paddingVertical: 5,
    textAlign: "center",
    borderRadius: 5,
  },

  calendar_box: {
    // padding : 8 ,
    alignItems: "center",
    justifyContent: "center",
    width: "14.28%", // 100% divided by 7 columns
    paddingVertical: 5,
    textAlign: "center",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: "1px",
    backgroundColor: "#ccc",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  calendar_outer_box: {
    backgroundColor: "rgb(53, 1, 53)",
    width: 320,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingTop: 15,
  },
});
