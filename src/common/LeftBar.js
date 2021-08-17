import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArchiveIcon from "@material-ui/icons/Archive";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#c2185b",
    minHeight: "100%",
    paddingTop: 50,
    padding: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "80vh",
    },
  },
  mainCard: {
    backgroundColor: "#c2185b",
    height: "100%",
    borderRadius: 10,
    width: "95%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  mainCard1: {
    backgroundColor: "#1B1450",
    height: "100%",
    borderRadius: 10,
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  tabs: {
    color: theme.palette.market.textPrimary,
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
  title: {
    display: "block",
    color: "#e65100",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  title1: {
    display: "block",
    color: "#FAFAFA",
    fontSize: 12,
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    fontWeight: 600,
    color: theme.palette.market.textPrimary,
    fontSize: 18,
    letterSpacing: "-1px",
    paddingTop: 5,
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  actionButton: {
    color: "black",
    textTransform: "none",
    borderRadius: "15px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    background: `linear-gradient(to right,#e5e5e5, #ffffff)`,
    fontSize: 14,

    marginLeft: 20,
    marginBottom: 30,
    marginTop: 20,
  },
  icon: {
    color: "white",
    paddingLeft: 5,
  },
}));
function LeftBar() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.mainCard}>
        <div className={classes.title}>
          <Link to="/">
            <div className="d-flex flex-row  justify-content-start align-items-center">
              <div style={{ paddingTop: 5 }}>
                <img src="/corgi.png" alt="logo" height="50px" />{" "}
              </div>{" "}
              <div className={classes.logo}>
                Corgib <span style={{ color: "#212121" }}>MarketPlace</span>
              </div>
            </div>
          </Link>
        </div>
        <Link to={"/all-items"}>
          <Typography
            className={classes.tabs}
            variant="body1"
            noWrap
            style={{ paddingBottom: 20 }}
          >
            Explore
          </Typography>
        </Link>

        <Link to={"/profile"}>
          <Typography
            className={classes.tabs}
            variant="body1"
            style={{ paddingBottom: 20 }}
          >
            Activities
          </Typography>
        </Link>
        <Link to={"/profile"}>
          <Typography
            className={classes.tabs}
            variant="body1"
            style={{ paddingBottom: 20 }}
          >
            Profile
          </Typography>
        </Link>
        <Link to={"/profile"}>
          <Typography
            className={classes.tabs}
            variant="body1"
            style={{ paddingBottom: 20 }}
          >
            Dashboard
          </Typography>
        </Link>
        <div className="d-flex justify-content-start">
          <div className="text-center">
            <Link to="/create-nft">
              {" "}
              <Button variant="contained" className={classes.actionButton}>
                Create Your NFT
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
