import Icons from "../../Icons";
import { Pressable, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CalendarHeader({ year, setYear, month, setMonth }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
      }}
    >
      <Icons
        onPress={() => setYear((cYear) => cYear - 1)}
        margin={10}
        name="left"
        size={20}
        color="white"
      />
      <Icons
        onPress={() => setMonth((cYear) => cYear - 1)}
        margin={13}
        name="left"
        size={20}
        color="white"
      />
      <View>
        <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
          {new Date(year, month).toLocaleDateString("en-us", {
            month: "long",
            year: "numeric",
          })}
        </Text>
      </View>
      <Icons
        onPress={() => setMonth((cYear) => cYear + 1)}
        margin={13}
        name="right"
        size={20}
        color="white"
      />
      <Icons
        onPress={() => setYear((cYear) => cYear + 1)}
        margin={10}
        name="right"
        size={20}
        color="white"
      />
    </View>
  );
}
