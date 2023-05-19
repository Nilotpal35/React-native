import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../../Colors/Colors";
import { useContext, useEffect, useState } from "react";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";
import { getExpenses } from "../../util/mutation";
import { setExpense } from "../../Store/Redux/ExpensesSlice";
import StickeyHeader from "../../Components/UI/StickeyHeader";
import ExpensesList from "../../Components/UI/ExpensesList";
import LoadingIndicator from "../../Components/UI/LoadingIndicator";
import { AuthContext } from "../../Store/Context/AuthContext";
import jwtDecode from "jwt-decode";
import { reLogin } from "../../util/http";
import { saveDataAsyncStorage } from "../../AsyncStorgage/Storage";

function AllExpenses() {
  const [errorMsg, setErrorMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Expenses = useSelector((state) => state.expenses.expenses) || [];
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const idToken = authCtx.token;
    async function checkTokenExpiry() {
      console.log("auth ctx", idToken);

      //Decode the ID token
      const decodedToken = jwtDecode(idToken);

      // Get the expiration time from the decoded token
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

      // Check if the token has expired
      const isTokenExpired = Date.now() >= expirationTime;
      async function fetchExpense(token) {
        setIsLoading(true);
        try {
          const response = await getExpenses(token);
          dispatch(setExpense({ expenses: response }));
        } catch (error) {
          setErrorMsg("Some issue in Fetching...");
        }
        setIsLoading(false);
      }

      if (isTokenExpired) {
        console.log("ID TOKEN EXPIRED!");
        const { id_token, refresh_token } = await reLogin(authCtx.refreshToken);
        //console.log("ID TOKEN - REGENERATE TOKEN", id_token, refresh_token);
        if ((id_token, refresh_token)) {
          saveDataAsyncStorage("TOKEN", id_token);
          saveDataAsyncStorage("REFRESH TOKEN", refresh_token);
          authCtx.logIn(id_token, refresh_token);
          // authCtx.token = id_token;
          // authCtx.refreshToken = refresh_token;
          fetchExpense(id_token);
        }
      } else {
        console.log("ID TOKEN VALID!");
        fetchExpense(idToken);
      }
    }

    if (idToken) {
      checkTokenExpiry();
    }
  }, [authCtx,saveDataAsyncStorage]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (errorMsg && !isLoading) {
    Alert.alert("Error!", `${errorMsg}`, [
      { style: "destructive", text: "Go back", onPress: setErrorMsg(null) },
    ]);
  }

  const finalAmount =
    Expenses &&
    Expenses.reduce((sum, item) => {
      return (sum += item.amount);
    }, 0);

  return (
    <View
      style={[
        styles.flatViewCotainer,
        // {
        //   backgroundColor:
        //     MODE === "LIGHT" ? Colors.lightGrey : Colors.primary100,
        // },
      ]}
    >
      <StickeyHeader
        text="Total Amount"
        finalAmount={finalAmount}
        MODE={MODE}
        styles={styles}
        width={width}
      />
      {Expenses.length > 0 ? (
        <ExpensesList Expenses={Expenses} />
      ) : (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              { color: MODE === "LIGHT" ? "black" : "white" },
            ]}
          >
            Expenses List Empty!!
          </Text>
        </View>
      )}
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  flatViewCotainer: {
    flex: 1,
  },
  sumContainer: {
    minHeight: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.primary100,
    //borderBottomWidth: 2,
    borderRadius:8,
    margin:10
  },
  total: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 38,
    marginLeft: 50,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  amount: {
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 5
  },
  amountValue: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.white,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 10,
  },
});
