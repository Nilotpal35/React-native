import { useDispatch } from "react-redux";
import { addEmoji } from "../../Store/redux/postSlice";
import { View, Pressable, Text } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

function Emoji({ id, emoji }) {
  const dispatch = useDispatch();
  return (
    <>
      <View
        style={{
          height: 40,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={({ pressed }) =>
            pressed ? { opacity: 0.35, overflow: "hidden" } : null
          }
          onPress={(e) => {
            dispatch(addEmoji({ like: "like", id: id }));
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ textAlign: "center", padding: 5 }}>
              {emoji.like}
            </Text>
            <AntDesign name="like1" color="blue" size={20} />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed ? { opacity: 0.35, overflow: "hidden" } : null
          }
          onPress={(e) => {
            dispatch(addEmoji({ like: "dislike", id: id }));
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 5,
                paddingHorizontal: 5,
              }}
            >
              {emoji.dislike}
            </Text>
            <AntDesign name="dislike1" color="black" size={20} />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed ? { opacity: 0.35, overflow: "hidden" } : null
          }
          onPress={(e) => {
            dispatch(addEmoji({ like: "heart", id: id }));
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ textAlign: "center", padding: 5 }}>
              {emoji.heart}
            </Text>
            <Ionicons name="ios-heart-circle" size={24} color="red" />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed ? { opacity: 0.35, overflow: "hidden" } : null
          }
          onPress={(e) => {
            dispatch(addEmoji({ like: "comment", id: id }));
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 5,
                paddingHorizontal: 5,
              }}
            >
              {emoji.comment}
            </Text>
            <MaterialIcons name="mode-comment" size={20} color="purple" />
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default Emoji;
