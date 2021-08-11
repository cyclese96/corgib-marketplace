import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 30,
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
      fontSize: 18,
      paddingTop: 70,
    },
  },
  cardWrapper: {
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
    backgroundImage: `url('https://www.cgmasteracademy.com/wp-content/uploads/2021/01/samantha_combaluzier_student_interview_featured.jpg')`,
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
function TopBid() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.heading}>Most Biding Items</h2>
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBid;
