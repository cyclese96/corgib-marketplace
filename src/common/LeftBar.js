import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#e5e5e5",
    minHeight: "100%",
    paddingTop: 50,
    padding: 10,
    position: "fixed",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mainCard: {
    backgroundColor: "#e5e5e5",
    height: "100%",
    borderRadius: 10,
    width: "95%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  title: {
    display: "block",
    color: "#212121",
    fontSize: 18,
  },
  logo: {
    fontWeight: 600,
    color: "#212121",
    fontSize: 18,
    letterSpacing: "-1px",
    paddingTop: 5,
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  actionButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "15px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    background: `linear-gradient(to right,#e91e63,#ec407a )`,
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 30,
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
            <div className="d-flex flex-row  justify-content-start align-items-center g-0">
              <div style={{ paddingTop: 5 }}>
                <img src="/corgi.png" alt="logo" height="50px" />
              </div>
              <div className={classes.logo}>
                Corgib <span style={{ color: "#c51162" }}>MarketPlace</span>
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
