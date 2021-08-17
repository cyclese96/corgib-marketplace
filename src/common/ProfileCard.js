import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { ArrowBack, Edit } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  textBox: {
    textAlign: "center",
  },
  textBoxMain: {
    textAlign: "center",
    paddingTop: 10,
  },
  cardText: {
    color: theme.palette.market.textPrimary,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 16,
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },

  nftCard: {
    backgroundColor: "#303f9f",
    height: "100%",
    width: 250,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
  },
  bgImage: {
    backgroundImage: `url('https://i1.sndcdn.com/avatars-000298736131-6gygpv-t500x500.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 220,
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      width: 180,
      height: 120,
    },
  },
}));

function ProfileCard() {
  const classes = useStyles();
  return (
    <div className={classes.nftCard}>
      <div className={classes.bgImage}></div>
      <div className={classes.textBoxMain}>
        <h6 className={classes.cardText}>Tommy Kill Hell</h6>
        <h6>
          <strong>Carry Minati</strong>
        </h6>
      </div>
    </div>
  );
}

export default ProfileCard;
