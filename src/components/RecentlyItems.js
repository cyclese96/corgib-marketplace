import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 20,
    width: "100%",
  },

  heading: {
    color: "#212121",
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: 200,
    },
  },
  headingRecently: {
    color: "#212121",
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: 200,
      paddingTop: 60,
    },
  },

  viewAll: {
    color: "#212121",
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
  viewAllRecent: {
    color: "#212121",
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      paddingTop: 60,
    },
  },
  link: {
    color: "#212121",
    "&:hover": {
      color: theme.palette.market.highlight,
    },
  },
  mainCard: {
    height: 370,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#eceff1, #eceff1)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
  },

  nftCard1: {
    backgroundColor: "#303f9f",
    height: 340,
    width: 240,
    padding: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  nftCard2: {
    backgroundColor: "#303f9f",
    height: 340,
    width: 240,
    padding: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {},
  },
  bgImage: {
    backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5857eeba9de4bb486e1ba151/1617454647979-WWZJY0BDAYR9AUS496PH/IMG_0519.GIF?format=1000w')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 260,
    borderRadius: 10,
  },

  bgImage1: {
    backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5857eeba9de4bb486e1ba151/1617454647979-WWZJY0BDAYR9AUS496PH/IMG_0519.GIF?format=1000w')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 200,
    borderRadius: 10,
  },
  bgImage2: {
    backgroundImage: `url('https://i.pinimg.com/originals/82/37/81/823781e9233402840be1851d40b77304.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 250,
    borderRadius: 10,
  },

  normalButton: {
    color: "black",
    textTransform: "none",
    borderRadius: "12px",
    padding: "5px 30px 5px 30px",
    fontWeight: 500,
    background: `linear-gradient(to right,
      #f9f9f9, #ffffff)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.2rem #00796B)`,
    backgroundImage: "#AD1457",

    "&:hover": {
      background: "#7986CB",
    },
  },

  nftCardButton1: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
  },
  nftCardButton2: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 235,
    paddingRight: 12,
  },
  textBox: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  cardText: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 16,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    creatorName: {
      color: theme.palette.market.highlight,
      fontWeight: 600,
      verticalAlign: "baseline",
      letterSpacing: "-0.8px",
      paddingBottom: 0,
      fontSize: 16,
      textAlign: "left",
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
      },
    },
  },
}));

function RecentlyAdded() {
  const classes = useStyles();
  return (
    <div>
      <div className="d-flex justify-content-start">
        <div>
          <h2 className={classes.headingRecently}>Recently Added</h2>
        </div>
        <div className={classes.viewAllRecent}>
          <Link to="/market/recent" className={classes.link}>
            View All
          </Link>
        </div>
      </div>
      <div className={classes.mainCard}>
        <Link to="/item-detail" className={classes.link}>
          <div className={classes.nftCard1}>
            <div className={classes.bgImage1}>
              <FavoriteBorderIcon />
            </div>
            <div className={classes.textBox}>
              <h6 className={classes.cardText}>Tommy Kill Hell</h6>
              <Link to="/profile">
                <h6 className={classes.creatorName}>Amir Minati</h6>
              </Link>
            </div>
            <div className={classes.nftCardButton1}>
              <Button className={classes.normalButton}>Follow</Button>
            </div>
          </div>
        </Link>{" "}
        <Link to="/item-detail" className={classes.link}>
          <div className={classes.nftCard1}>
            <div className={classes.bgImage1}>
              <FavoriteBorderIcon />
            </div>
            <div className={classes.textBox}>
              <h6 className={classes.cardText}>Tommy Kill Hell</h6>
              <Link to="/profile">
                <h6 className={classes.creatorName}>Carry Minati</h6>
              </Link>
            </div>
            <div className={classes.nftCardButton1}>
              <Button className={classes.normalButton}>Follow</Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RecentlyAdded;
