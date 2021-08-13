import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    minHeight: "100%",
    padding: 20,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "80vh",
    },
  },
  mainCard: {
    backgroundColor: "#1B1450",
    height: "100%",
    borderRadius: 10,
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
}));
function LeftBar() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.mainCard}>
        <Link to={"/market"}>
          <Typography
            className={classes.tabs}
            variant="body1"
            noWrap
            style={{ paddingBottom: 20 }}
          >
            Explore
          </Typography>
        </Link>

        <Link to={"profile"}>
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
      </div>
    </div>
  );
}

export default LeftBar;
