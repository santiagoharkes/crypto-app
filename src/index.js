import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyles";
import Providers from "./context/providers/Providers";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
