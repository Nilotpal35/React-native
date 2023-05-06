import { View, Text } from "react-native";
import { Colors } from "../../Colors/Colors";

const StickeyHeader = ({ text, finalAmount, MODE, styles, width }) => {
  return (
    <>
      <View
        style={[
          styles.sumContainer,
          {
            backgroundColor:
              MODE === "LIGHT" ? Colors.reddish400 : Colors.primary300,
          },
        ]}
      >
        <View style={styles.total}>
          <Text style={styles.amountText}>{text}</Text>
        </View>
        <View
          style={[
            styles.amount,
            {
              width: width > 400 ? 200 : 170,
              backgroundColor:
                MODE === "LIGHT" ? Colors.reddish500 : Colors.primary600,
            },
          ]}
        >
          <Text style={styles.amountValue}>${finalAmount.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};

export default StickeyHeader;
