import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Holas from "./pages/Holas";
import Layout from "./components/Layout/Layout";

// Context
import { useTheme } from "./context/theme/ThemeContext";

function Routes() {
  const { ...state } = useTheme();

  return (
    <ThemeProvider theme={state}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/holas" component={Holas} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default Routes;
