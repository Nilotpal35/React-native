import { createContext, useEffect, useState } from "react";
import {
  deleteDataAsyncStorage,
  retriveDataAsyncStorage,
  saveDataAsyncStorage,
} from "../../AsyncStorgage/Storage";

export const AuthContext = createContext({
  token: "",
  refreshToken: "",
  isAuthenticated: false,
  logIn: (token) => {},
  logOut: (token) => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    async function fetchAsyncData() {
      const token = await retriveDataAsyncStorage("TOKEN");
      const refresh_token = await retriveDataAsyncStorage("REFRESH TOKEN");
      if (token) {
        setAuthToken(token);
        setRefreshToken(refresh_token);
      }
    }
    fetchAsyncData();
  }, []);

  const logIn = (token, refreshToken) => {
    setAuthToken(token);
    setRefreshToken(refreshToken);
    saveDataAsyncStorage("TOKEN", token);
    saveDataAsyncStorage("REFRESH TOKEN", refreshToken);
  };

  const logOut = () => {
    setAuthToken(null);
    setRefreshToken(null);
    deleteDataAsyncStorage("TOKEN");
    deleteDataAsyncStorage("REFRESH TOKEN");
  };

  const value = {
    token: authToken,
    refreshToken: refreshToken,
    isAuthenticated: !!authToken,
    logIn: logIn,
    logOut: logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
