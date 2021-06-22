import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyles";
import Providers from "./context/providers/Providers";
import { BrowserRouter as Router } from "react-router-dom";
import { AxiosProvider } from "./context/axios/useAxios";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <Router>
            <Routes />
          </Router>
        </Providers>
      </QueryClientProvider>
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
