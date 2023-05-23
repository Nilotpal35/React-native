import { View, Text } from "react-native";

const SubDescription = ({ affordability, complexity, duration, newStyles }) => {
  return (
    <View style={newStyles.rowView}>
      <Text>{affordability}</Text>
      <Text>{duration}</Text>
      <Text>{complexity}</Text>
    </View>
  );
};

export default SubDescription;
