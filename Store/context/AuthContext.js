import { createContext, useEffect, useState } from "react";
import {
  clearAsyncStorageData,
  getAsyncStorageData,
  storeAsyncStorageData,
} from "../../AsyncStorage/Storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  logIn: (token) => {},
  logOut: (token) => {},
});

export default function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState();

  useEffect(() => {
    async function fetchData() {
      const token = await getAsyncStorageData("token");
      if (token) {
        setAuthState(token);
      }
    }
    fetchData();
  }, []);

  function logIn(token) {
    setAuthState(token);
    storeAsyncStorageData("token", token);
  }

  function logOut() {
    setAuthState(null);
    clearAsyncStorageData("token");
  }

  const value = {
    token: authState,
    isAuthenticated: !!authState,
    logIn: logIn,
    logOut: logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
