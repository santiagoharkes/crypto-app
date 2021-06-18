import React from "react";
import { ThemeProvider } from "../theme/ThemeContext";

function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
