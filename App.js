import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./Store/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackView from "./Stack/StackView";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <View style={styles.rootContainer}>
          <Provider store={store}>
            <StackView />
          </Provider>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
