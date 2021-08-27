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

  viewAll: {
    color: "#212121",
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: "right",
    paddingRight: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },

  link: {
    paddingRight: 5,
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
  nftCard: {
    backgroundColor: "#303f9f",
    height: 340,
    width: 240,
    padding: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },

  bgImage: {
    backgroundImage: `url('https://i.redd.it/r042t3k4d4b61.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 240,
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
      background: "#C80C81",
    },
  },

  nftCardButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 200,
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
}));
function FeaturedCard() {
  const classes = useStyles();

  return (
    <Link to="/item-detail">
      <div className={classes.nftCard}>
        <div className={classes.bgImage}>
          <FavoriteBorderIcon />
          {/* <div className={classes.nftCardButton}>
            <Button className={classes.normalButton}>Follow</Button>
          </div> */}
        </div>
        <div className={classes.textBox}>
          <h6 className={classes.cardText}>Tommy Kill Hell</h6>
          <Link to="/profile">
            <h6 className={classes.creatorName}>Amir Minati</h6>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedCard;
