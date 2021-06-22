import React from "react";
import { CarteraActualProvider } from "../CarteraActual/CarteraActualContext";
import { ThemeProvider } from "../theme/ThemeContext";
import { TransfersProvider } from "../Transfers/TransfersContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <TransfersProvider>
        <CarteraActualProvider>{children}</CarteraActualProvider>
      </TransfersProvider>
    </ThemeProvider>
  );
}

export default Providers;
