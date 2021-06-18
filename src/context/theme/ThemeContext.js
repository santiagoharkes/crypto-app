import React, { createContext, useReducer, useContext } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext({});

export const darkTheme = {
  bg: "#212121",
  bgSecondary: "#272727",
  text: "#eaeaea",
  white: "#eaeaea",
  black: "#212121",
  yellow: "#fbc320",
  subtitle: "#b0b0b0",
  border: "#cacaca3b",
  green: "#00b714",
  red: "#ff0018",
  orange: "#ff921f",
  lightBlue: "#1f96ff",
};

export const lightTheme = {
  backgroundColor: "#eaeaea",
  backgroundColorSecondary: "#ddd",
  text: "#212121",
  white: "#eaeaea",
  black: "#212121",
  yellow: "#fbc320",
  subtitle: "#373737",
  border: "#cacaca3b",
  green: "#00b714",
  red: "#ff0018",
  orange: "#ff921f",
  lightBlue: "#1f96ff",
};

const storage = localStorage.getItem("themeContext")
  ? localStorage.getItem("themeContext")
  : "dark";

const initialState = {
  theme: storage,
  colors: storage === "dark" ? darkTheme : lightTheme,
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = (payload) => {
    if (state.theme === "dark") {
      dispatch({ type: "CHANGE_THEME", payload: "light" });
    } else {
      dispatch({ type: "CHANGE_THEME", payload: "dark" });
    }
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, ...state }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
