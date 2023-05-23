import { Modal, View, Text, Button } from "react-native";

const ModalView = ({ onPress, data, style }) => {
  return (
    <Modal>
      <View
        style={{
          backgroundColor: "grey",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={style.text}>{data.title}</Text>
        <Button title="click here" onPress={onPress} />
      </View>
    </Modal>
  );
};

export default ModalView;
