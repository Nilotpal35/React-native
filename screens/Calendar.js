import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import CalendarHeader from "../components/UI/CalendarUI/CalendarHeader";

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    date: 1,
  });

  const calendarHeader = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const getHeader = calendarHeader.map((item) => {
    return (
      <View style={[styles.calendar_box, { marginBottom: 15 }]}>
        <Text style={{ color: "black", fontWeight: "bold" }}>{item}</Text>
      </View>
    );
  });

  function pressHandler(date) {
    setModalVisible({
      ...modalVisible,
      visible: !modalVisible.visible,
      date: date,
    });
  }

  function getCalendar() {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const calendar = [];

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
      if(i !== new Date().getDate()) {
       calendar.push(
        <Pressable
          style={({ pressed }) => [
            pressed && { opacity: 0.5 },
            styles.calendar_box,
          ]}
          onPress={() => pressHandler(i)}
          
        >
          <View key={`full-${JSON.stringify(new Date(Date.now()))}`}>
            <Text style={{ color: "black", fontWeight: "500" }}>{i}</Text>
          </View>
        </Pressable>
      );
    } else if(i ===  new Date().getDate() && month === new Date().getMonth()){   //current day highlighted in calendar
        calendar.push(
          <Pressable
            style={({ pressed }) => [
              pressed && { opacity: 0.5 },
              styles.calendar_box,{backgroundColor : 'grey'}
            ]}
            onPress={() => pressHandler(i)}
          >
          <View key={`full-${JSON.stringify(new Date(Date.now()))}`}>
              <Text style={{ color: "black", fontWeight: "700" }}>{i}</Text>
            </View>
          </Pressable>
      )}
    }
    return calendar;
  }

  const calendarProps = {
    year: year,
    setYear: setYear,
    month: month,
    setMonth: setMonth,
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.calendar_outer_box}>
          <CalendarHeader {...calendarProps} />
          <View style={{ width: 300, padding: 15}}>
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
    //paddingHorizontal: 20,
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
    //width: 320,
    //height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 0
  },
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    //padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "50%",
  },
});
