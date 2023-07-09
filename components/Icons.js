import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Icons({ margin, onPress, name, size, color }) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.5 },
        { marginHorizontal: margin },
      ]}
      onPress={onPress}
    >
      <AntDesign name={name} size={size} color={color} />
    </Pressable>
  );
}
