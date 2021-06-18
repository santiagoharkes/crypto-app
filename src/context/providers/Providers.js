import React from "react";
import { ThemeProvider } from "../theme/ThemeContext";
import { TransfersProvider } from "../Transfers/TransfersContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <TransfersProvider>{children}</TransfersProvider>
    </ThemeProvider>
  );
}

export default Providers;
