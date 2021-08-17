import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Backdrop,
  Button,
  Dialog,
  getContrastRatio,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import web3 from "./../web";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
  getUserAddress,
} from "../actions/web3Actions";
import {
  authenticateUser,
  checkAuthenticated,
  signOutUser,
} from "./../actions/authActions";
import { getCorgibBalance } from "../utils/contractMethods";
import AppbarTab from "./AppbarTab";
import { connect } from "react-redux";
import propTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";
import { AccountBalanceWallet, Close } from "@material-ui/icons";
import BalancePopup from "./BalancePopup";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "transparent",
    boxShadow: "none",
    height: 70,
  },
  logo: {
    fontWeight: 600,
    color: theme.palette.market.textPrimary,
    fontSize: 20,
    letterSpacing: "-1px",
    paddingTop: 5,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    color: "#e65100",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  tabs: {
    color: "black",
    display: "block",
    fontWeight: 500,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.7px",
    padding: "9px 25px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    backgroundColor: "transparent",
  },
  menuIcon: {
    color: "#e5e5e5",

    marginTop: 10,
  },
  list: {
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: theme.palette.pbr.primary,
    height: "100%",
    backgroundColor: "transparent",
  },
  fullList: {
    width: "auto",
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: "none",
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
  buttonOutlined: {
    borderRadius: "10px",
    border: "1px solid #000000",
    background: "#ffffff",
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    marginTop: 5,
    color: "#000000",
    padding: "12px 16px 12px 16px",
    fontWeight: 500,
    fontSize: "1.1vw",
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  normalButton: {
    color: "#f9f9f9",
    textTransform: "none",
    borderRadius: "50px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
  },
  balanceButton: {
    border: "2px solid #C80C81",
    borderRadius: 50,
    textTransform: "none",
    padding: "4px 16px 4px 16px",
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: 200,
    height: 40,
    borderRadius: 15,
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    border: "1px solid #FAFAFA ",
    color: "white",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "white",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  icon: {
    color: "#212121",
    paddingRight: 10,
    fontSize: 40,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Appbar({
  authenticateUser,
  authenticated,
  signOutUser,
  checkAuthenticated,
}) {
  const classes = useStyles();

  const [bnbBal, setBnbBal] = useState(0);
  const [corgibBal, setCorgibBal] = useState(10);
  const [userAdd, setUserAdd] = useState(null);
  const [popup, setPopup] = useState(false);

  const [alert, setAlert] = React.useState({ status: false, message: "" });

  const signOut = (currentAddress) => {
    signOutUser(currentAddress);
    setPopup(false);
  };

  const togglePopup = (value) => {
    setPopup(value);
  };

  useEffect(() => {
    async function asyncFn() {
      let walletStatus = await checkWalletAvailable();
      if (walletStatus) {
        const networkStatus = await checkCorrectNetwork();

        if (networkStatus) {
          let authStatus = await checkAuthenticated();

          if (authStatus) {
            let userAddress = await getUserAddress();
            setUserAdd(userAddress);
            getBalance();
          } else {
          }
        } else {
          setAlert({ status: true, message: "Only support BSC network" });
        }
      } else {
        setAlert({ status: true, message: "Install metamask first!" });
      }
    }

    asyncFn();
  }, [checkAuthenticated]);

  const getBalance = async () => {
    let currentAddress = await getUserAddress();
    let balance = await web3.eth.getBalance(currentAddress);

    let bnbBalance = web3.utils.fromWei(balance ? balance.toString() : "0");
    setBnbBal(bnbBalance);

    let corgibBalance = await getCorgibBalance(currentAddress);
    let corgibInEth = web3.utils.fromWei(corgibBalance.toString(), "ether");
    setCorgibBal(corgibInEth);
  };

  const connectWallet = async () => {
    let walletStatus = await checkWalletAvailable();
    if (walletStatus) {
      const networkStatus = await checkCorrectNetwork();
      if (networkStatus) {
        authenticateUser();
        getBalance();
      } else {
        // setAlert({ status: true, message: "Only support BSC network" });
      }
    } else {
      // setAlert({ status: true, message: "Install metamask first!" });
    }
  };

  useEffect(() => {
    async function asyncFn() {
      //Events to detect changes in account or network.
      if (window.ethereum !== undefined) {
        window.ethereum.on("accountsChanged", async function (accounts) {
          authenticateUser();
          window.location.reload();
        });

        window.ethereum.on("networkChanged", async function (networkId) {
          let networkStatus = await checkCorrectNetwork();
          if (networkStatus) {
            authenticateUser();
            getBalance();
          } else {
            setAlert({ status: true, message: "Only support BSC network" });
            signOut(userAdd);
          }
        });
      }
    }
    asyncFn();
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.background}>
        <Toolbar className="d-flex justify-content-between ">
          <div></div>
          <div className="d-flex justify-content-center align-items-center">
            <AppbarTab />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className={classes.sectionDesktop}>
              {authenticated ? (
                <div>
                  <Button
                    className={classes.balanceButton}
                    onClick={() => togglePopup(true)}
                  >
                    <div className={classes.buttonIcon}>
                      <AccountBalanceWallet className={classes.icon} />
                    </div>
                    <div>
                      <strong style={{ color: "#212121", fontSize: 16 }}>
                        {bnbBal !== null &&
                          parseFloat(bnbBal).toFixed(3) + " BNB"}{" "}
                      </strong>
                    </div>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    className={classes.normalButton}
                    onClick={connectWallet}
                  >
                    {web3 !== undefined
                      ? "Connect your wallet"
                      : "Missing Metamask!"}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div className="d-flex flex-row  justify-content-start align-items-center">
              <div style={{ paddingTop: 5 }}>
                <img src="/corgi.png" alt="logo" height="55px" />
              </div>
              <Link to="/">
                <div
                  style={{
                    fontWeight: 600,
                    color: "#212121",
                    fontSize: 20,
                    letterSpacing: "-1px",
                    paddingTop: 5,
                  }}
                >
                  Corgib <span className={classes.highlight}>MarketPlace</span>
                </div>
              </Link>
            </div>

            <Dialog
              className={classes.modal}
              open={popup}
              keepMounted
              onClose={() => togglePopup(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <div style={{ backgroundColor: "black" }}>
                <BalancePopup
                  address={userAdd}
                  corgib={corgibBal}
                  togglePopup={() => togglePopup(false)}
                  signOut={() => signOut(userAdd)}
                />
              </div>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Appbar.propTypes = {
  authenticateUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  authenticateUser,
  signOutUser,
  checkAuthenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
