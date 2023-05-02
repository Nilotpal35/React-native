import { Children, createContext, useState } from "react";

export const ScreenMode = createContext({
  mode: "LIGHT",
  switchMode: (value) => {},
});

export default function ScreenModeCtx({ children }) {
  const [mode, setMode] = useState("LIGHT");

  function switchMode(value) {
    setMode(value);
  }
  const value = {
    mode: mode,
    switchMode: switchMode,
  };
  return <ScreenMode.Provider value={value}>{children}</ScreenMode.Provider>;
}
