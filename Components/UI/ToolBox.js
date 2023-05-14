import React from "react";
import { View, Text } from "react-native";
import { Tooltip } from "react-native-elements";

const PopUpText = ({ text, children }) => {
  return (
    <Tooltip
      popover={<Text>{text}</Text>}
      containerStyle={{ backgroundColor: "red", padding: 20 }}
    >
      {children}
    </Tooltip>
  );
};

export default PopUpText;
