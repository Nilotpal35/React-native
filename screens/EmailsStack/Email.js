import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import EmailGridTile from "../../components/UI/EmailUI/EmailGridTile";
import Icons from "../../components/Icons";
import { GlobalColors } from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import NewMail from "../../components/UI/EmailUI/NewMail";
import { useSelector } from "react-redux";

function renderEmailItems(itemData) {
  const data = {
    id: itemData.item.id,
    title: itemData.item.title,
    message: itemData.item.message,
    time: itemData.item.time,
  };
  return <EmailGridTile {...data} />;
}

export default function Email() {
  const [modalVisible, setModalVisible] = useState(false);
  const Emails = useSelector((state) => state.emails.Email);

  return (
    <View style={styles.emailContainer}>
      {modalVisible && (
        <NewMail
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
        />
      )}
      <FlatList
        data={Emails}
        keyExtractor={(item) => item.id}
        renderItem={renderEmailItems}
      />
      <View style={styles.logo}>
        <Pressable
          style={({ pressed }) => [
            pressed && { opacity: 0.5 },
            {
              width: 80,
              height: 80,
            },
          ]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons
            name="add-circle"
            color={GlobalColors.blue.blue100}
            size={60}
            //style={}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emailContainer: {
    //backgroundColor : GlobalColors.cyan.cyan800,
    flex: 1,
    padding: 5,
  },
  logo: {
    //position: "absolute",
    //top: 0,
    //left: 0,
    //right: 0,
    zIndex: 1,
    // Adjust the dimensions and positioning of the logo container as needed
    //height: 100,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    //backgroundColor: "red",
    bottom: 0,
    right: 0,
  },
});
