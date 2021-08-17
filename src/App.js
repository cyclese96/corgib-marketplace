import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ItemDetails from "./pages/MarketPlace/details/ItemDetails";
import Profile from "./pages/Profile/Profile";
import LeftBar from "./common/LeftBar";
import "./web";
import CreateNFT from "./pages/MarketPlace/details/CreateNFT";
import LearnHow from "./components/LearnHow";
import Home from "./pages/MarketPlace/Home";
import Footer from "./common/Footer";
import AllItems from "./common/AllItems";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="row g-0">
            <div className="col-md-2">
              <LeftBar />
            </div>
            <div className="col-md-10" style={{ backgroundColor: "#ffffff" }}>
              <Appbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/item-detail">
                  <ItemDetails />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route exact path="/create-nft">
                  <CreateNFT />
                </Route>
                <Route exact path="/learn">
                  <LearnHow />
                </Route>
                <Route exact path="/all-items">
                  <AllItems />
                </Route>
              </Switch>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
