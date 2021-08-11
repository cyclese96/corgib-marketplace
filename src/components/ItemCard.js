import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 30,
    width: "100%",
  },
  headingTop: {
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
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filterWrapper: {
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  filterButton: {
    border: "1px solid ",
    borderRadius: 10,
    height: 40,
    width: 150,
    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
    marginRight: "10px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  cardWrapper: {
    borderTop: 10,
    borderBottom: 10,
    borderColor: "red",
    backgroundColor: "white",
    height: 400,
    padding: 15,
    borderRadius: 30,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  auctionCard: {
    backgroundColor: "#15134A",
    width: 300,
    height: 350,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },
  bgImage: {
    backgroundImage: `url('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f5f59b47b844b2b3fd1948248fc72e9d-1615402423/Super-Man-XRP-2/make-animated-nft-for-you.gif')`,
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

function ItemCard() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-12">
          <div className={classes.cardWrapper}>
            <div className={classes.mainCard}>
              <div>
                <div className={classes.auctionCard}>
                  <div className="d-flex justify-content-start">
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
            </div>
            <div className={classes.mainCard}>
              <div>
                <div className={classes.auctionCard}>
                  <div className="d-flex justify-content-start">
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
            </div>
            <div className={classes.mainCard}>
              <div>
                <div className={classes.auctionCard}>
                  <div className="d-flex justify-content-start">
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
            </div>
            <div className={classes.mainCard}>
              <div>
                <div className={classes.auctionCard}>
                  <div className="d-flex justify-content-start">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
