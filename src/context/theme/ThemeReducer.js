import { darkTheme, lightTheme } from "./ThemeContext";

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      localStorage.setItem("themeContext", action.payload);

      return {
        ...state,
        theme: action.payload,
        colors: action.payload === "dark" ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};
