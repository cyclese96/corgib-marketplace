import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: `#303f9f`,
    color: theme.palette.market.textPrimary,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  icon: {
    color: "white",
    fontSize: 45,
    paddingRight: 15,
    marginBottom: 20,
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
  linkWrapper: {
    fontSize: 18,
    color: "white",
    paddingBottom: 20,
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.footerWrapper}>
        <div classes={classes.iconWrapper}>
          <a href="#">
            <TwitterIcon className={classes.icon} />
          </a>
          <a href="#">
            <InstagramIcon className={classes.icon} />
          </a>
          <a href="#">
            <TelegramIcon className={classes.icon} />
          </a>
          <a href="#">
            <GitHubIcon className={classes.icon} />
          </a>
          <a href="#">
            <EmailIcon className={classes.icon} />
          </a>
        </div>
        <div className={classes.linkWrapper}>
          <a style={{ paddingRight: 10 }}>Explore</a>
          <a style={{ paddingRight: 10 }}>Activities</a>
          <a style={{ paddingRight: 10 }}>Profile</a>
          <a style={{ paddingRight: 10 }}>Wallet</a>
        </div>
        <p className="copyright">
          Copyright 2021{" "}
          <strong style={{ color: "#21D0B2" }}>CORGIB MARKETPLACE</strong>. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
