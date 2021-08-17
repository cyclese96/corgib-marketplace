import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.market.textPrimary,
    "&:hover": {
      color: theme.palette.market.highlight,
    },
  },
  mainCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 360,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#ede7f6, #ede7f6)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    width: 220,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {},
  },

  bgImage: {
    backgroundImage: `url('https://nexo.io/media/pages/modules/header-bitcoin-halving/d70323b9df/nexo-bitcoin-halving.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 220,
    borderRadius: 10,
  },
  normalButton: {
    color: "black",
    textTransform: "none",
    borderRadius: "12px",
    padding: "5px 30px 5px 30px",
    fontWeight: 500,
    background: `linear-gradient(to right,
      #ffffff, #e5e5e5)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.2rem #00796B)`,
    backgroundImage: "#AD1457",
    marginLeft: 20,
    "&:hover": {
      background: "#7986CB",
    },
  },
  nftCardButton: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 250,
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
function TrendingCard() {
  const classes = useStyles();
  return (
    <div>
      <Link to="/item-detail" className={classes.link}>
        <div className={classes.nftCard}>
          <div className={classes.bgImage}>
            <FavoriteBorderIcon />
            <div className={classes.nftCardButton}>
              <Button className={classes.normalButton}>Follow</Button>
            </div>
          </div>
          <div className={classes.textBox}>
            <h6 className={classes.cardText}>Tommy Kill Hell</h6>
            <Link to="/profile" className={classes.link}>
              <h6>
                <strong>Carry Minati</strong>
              </h6>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TrendingCard;
