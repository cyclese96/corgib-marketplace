import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  auctionCard: {
    backgroundColor: "#15134A",
    width: 260,
    height: 350,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },
  bgImage: {
    backgroundImage: `url('https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/600ae2232a839f53fe53de1d_93C7F6A6-5C99-46D7-9276-B4DEB000AAAC.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
  textBox: {
    paddingTop: 250,
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
      fontSize: 18,
    },
  },
  subHeading: {
    color: `grey`,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "0.8px",
    paddingBottom: 0,
    fontSize: 14,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
}));

function CategoryCard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainCard}>
        <div className={classes.auctionCard}>
          <div className={classes.bgImage}>
            <div className={classes.textBox}>
              <h6 className={classes.cardText}>
                <strong>Dragon of Wonder Request</strong>
              </h6>
              <h6 className={classes.subHeading}>
                <strong>Highest Bid 1/1</strong>
              </h6>
              <h6 className={classes.subHeading}>
                <strong>Ether</strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
