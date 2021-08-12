import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "50vh",
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  logo: {
    fontWeight: 600,
    color: theme.palette.market.textPrimary,
    fontSize: 18,
    letterSpacing: "-1px",
    paddingTop: 5,
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
  highlight: {
    color: theme.palette.pbr.primary,
  },

  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  para: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",

    paddingBottom: 20,
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
  textContainer: {
    padding: 20,
  },
  actionButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    marginRight: 12,
    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
  },
  normalButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
  },
  viewAll: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  mainCard: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  sectionCard1: {
    backgroundColor: "#15134A",
    marginTop: 20,
    height: "100%",
    width: "100%",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionCard2: {
    marginTop: 20,
    // backgroundColor: '#15134A',
    width: "100%",
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "flex-start",
  },
  profileImage: {
    backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/629/360/993/moneyheist-lacasadepapel-spain-the-professor-hd-wallpaper-thumb.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 120,
    width: 120,
    borderRadius: "45%",
    marginBottom: 20,
  },

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
  address: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 13,
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  cover: {
    zIndex: 0,
    height: 240,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(3, 3, 3, 0.3) ),url("https://blog.bitpanda.com/content/images/2021/03/what_is_nft_en.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: `drop-shadow(0 0 0.9rem #1a237e)`,
  },

  nftCard: {
    backgroundColor: "#15134A",
    height: "100%",
    width: 300,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
    [theme.breakpoints.down("md")]: {
      width: 240,
      height: 240,
      marginBottom: 10,
    },
  },
  bgImage: {
    backgroundImage: `url('https://i1.sndcdn.com/avatars-000298736131-6gygpv-t500x500.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 250,
    borderRadius: 10,
  },
  iconWrapper: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    "&:hover": {
      color: "#1EAE98",
    },
  },
}));
function Appbar() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.title}>
        <Link to="/">
          <div className="justify-content-start align-items-center">
            <div style={{ paddingTop: 5, paddingBottom: 5 }}>
              <img src="/corgi.png" alt="logo" height="55px" />{" "}
            </div>{" "}
            <div className={classes.logo}>
              Corgib <span className={classes.highlight}>MarketPlace</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
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

              <Link to={"/market/profile"}>
                <Typography
                  className={classes.tabs}
                  variant="body1"
                  style={{ paddingBottom: 20 }}
                >
                  Activities
                </Typography>
              </Link>
              <Link to={"/market/profile"}>
                <Typography
                  className={classes.tabs}
                  variant="body1"
                  style={{ paddingBottom: 20 }}
                >
                  Profile
                </Typography>
              </Link>

              <div className={classes.sectionDesktop}>
                <div style={{ paddingTop: 20 }}>
                  {" "}
                  <div className="text-center">
                    <Button className={classes.normalButton}>
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classes.sectionDesktop}>
                <div style={{ paddingTop: 20 }}>
                  {" "}
                  <div className="text-center">
                    <Button className={classes.normalButton}>Cerate NFT</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Appbar;
