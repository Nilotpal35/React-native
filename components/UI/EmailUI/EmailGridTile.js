import { Modal, Pressable, StyleSheet } from "react-native";
import { View, Text, useWindowDimensions } from "react-native";
import { GlobalColors } from "../../../utils/Colors";
import EmailDetail from "./EmailDetail";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function EmailGridTile({ id, title, message, time }) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const data = {
    id: id,
    title: title,
    message: message,
    date: time,
  };

  function pressHandler() {
    navigation.navigate("EmailInfo", { data: data });
  }

  return (
    <>
      <Pressable
        style={({ pressed }) => [styles.grid, pressed && { opacity: 0.5 }]}
        onPress={pressHandler}
      >
        <View style={styles.logo}>
          <View style={styles.design}>
            <Text>{title[0]}</Text>
          </View>
        </View>
        <View>
          <View style={[styles.titleContainer, { width: width - 80 }]}>
            <View style={styles.title}>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>
                {title.length > 25 ? `${title.slice(0, 25)}...` : title}
              </Text>
            </View>
            <View style={styles.time}>
              <Text>
                {new Date(
                  time.length === 10 && time.split("-").length === 3
                    ? time
                    : new Date()
                ).toDateString("en-us", { dateStyle: "full" })}
              </Text>
            </View>
          </View>
          <View style={[styles.messageContainer, { width: width - 100 }]}>
            <Text style={{ fontSize: 17, fontWeight: 500, padding: 5 }}>
              {message.length > 50 ? `${message.slice(0, 80)}...` : message}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  grid: {
    //marginHorizontal : 5,
    backgroundColor: "white",
    borderRadius: 6,
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 110,
    overflow: "hidden",
    borderBottomColor: `${GlobalColors.blue.blue100}2a`,
  },
  logo: {
    //padding : 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    //backgroundColor : GlobalColors.red.red1000,
    //overflow : 'hidden'
  },
  design: {
    borderWidth: 1,
    borderColor: GlobalColors.grey.grey1000,
    backgroundColor: `${GlobalColors.blue.blue100}1c`,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  titleContainer: {
    flexDirection: "row",
    //paddingTop : 10,
    //backgroundColor : GlobalColors.cyan.cyan700,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    paddingTop: 10,
    paddingLeft: 8,
  },
  time: {
    backgroundColor: `${GlobalColors.blue.blue100}1c`,
    padding: 3,
    borderRadius: 4,
  },
  messageContainer: {
    //backgroundColor : GlobalColors.cyan.cyan700,
    paddingTop: 10,
    paddingLeft: 6,
  },
});
