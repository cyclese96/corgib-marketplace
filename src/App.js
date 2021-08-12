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
import Profile from "./pages/Profile/Profile";
import LeftBar from "./common/LeftBar";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="row g-0">
            <div className="col-md-2">
              <LeftBar />
              {/* Clean your leftbar code according to design */}
            </div>
            <div className="col-md-10">
              {/* {Paste your appbar here}? */}
              <Switch>
                <Route exact path="/">
                  <Marketplace />
                </Route>
                <Route exact path="/item-detail">
                  <ItemDetails />
                </Route>
                <Route exact path="/market/profile">
                  <Profile />
                </Route>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
