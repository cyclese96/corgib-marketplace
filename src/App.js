import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Marketplace from "./pages/MarketPlace/Marketplace";
import ItemDetails from "./pages/MarketPlace/details/ItemDetails";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Appbar />
              <Marketplace />
            </Route>
            <Route exact path="/item-detail">
              <Appbar />
              <ItemDetails />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
