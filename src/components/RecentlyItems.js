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
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: 200,
    },
  },
  headingRecently: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,

    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: 200,
      paddingTop: 60,
    },
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
  viewAllRecent: {
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
      paddingTop: 60,
    },
  },
  link: {
    color: theme.palette.market.textPrimary,
    "&:hover": {
      color: theme.palette.market.highlight,
    },
  },
  mainCard: {
    height: 370,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
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
  nftCard: {
    backgroundColor: "#15134A",
    height: 260,
    width: 220,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  nftCard1: {
    backgroundColor: "#15134A",
    height: 340,
    width: 250,
    padding: 10,
    marginRight: 50,
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {},
  },
  nftCard2: {
    backgroundColor: "#15134A",
    height: 340,
    width: 250,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {},
  },
  bgImage: {
    backgroundImage: `url('https://i.redd.it/r042t3k4d4b61.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 260,
    borderRadius: 10,
  },

  bgImage2: {
    backgroundImage: `url('https://i.pinimg.com/originals/82/37/81/823781e9233402840be1851d40b77304.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 200,
    borderRadius: 10,
  },
  bgImage3: {
    backgroundImage: `url('https://i.pinimg.com/originals/82/37/81/823781e9233402840be1851d40b77304.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 320,
    borderRadius: 10,
  },
  normalButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    width: "150px",
    fontWeight: 500,
    background: `linear-gradient(to right,
      #4527A0, #B2EBF2)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.2rem #00796B)`,
    backgroundImage: "#AD1457",
    marginLeft: 20,
    "&:hover": {
      background: "#7986CB",
    },
  },
  normalButton1: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    width: "150px",
    fontWeight: 500,
    background: `linear-gradient(to right,
      #4527A0,  #00796B)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.2rem #D1C4E9)`,
    backgroundImage: "#AD1457",
    marginLeft: 20,
    "&:hover": {
      background: "#7986CB",
    },
  },

  nftCardButton: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 180,
    paddingRight: 12,
  },
  nftCardButton1: {
    display: "flex",
    justifyContent: "flex-start",
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
            <div className={classes.bgImage2}>
              <FavoriteBorderIcon />
            </div>
            <div className={classes.textBox}>
              <h6 className={classes.cardText}>Tommy Kill Hell</h6>
              <h6>
                <strong>Carry Minati</strong>
              </h6>
            </div>
            <div className={classes.nftCardButton1}>
              <Button className={classes.normalButton1}>Follow</Button>
            </div>
          </div>
        </Link>
        <Link to="/item-detail" className={classes.link}>
          <div className={classes.nftCard2}>
            <div className={classes.bgImage3}>
              <FavoriteBorderIcon />
              <div className={classes.nftCardButton2}>
                <Button className={classes.normalButton}>Follow</Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RecentlyAdded;
