import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function Icon({ name, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {},
});
