import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./tabs/BottomTabs";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import FavouriteContextProvider from "./store/Context/favouriteContext";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <FavouriteContextProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </FavouriteContextProvider>
    </View>
  );
}
