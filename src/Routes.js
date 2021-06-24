import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Layout from "./components/Layout/Layout";

// Context
import { useTheme } from "./context/theme/ThemeContext";
import Cartera from "./pages/cartera/Cartera";

function Routes() {
  const { ...state } = useTheme();

  return (
    <ThemeProvider theme={state}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cartera" component={Cartera} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default Routes;
