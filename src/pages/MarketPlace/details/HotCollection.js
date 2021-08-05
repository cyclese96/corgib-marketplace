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
    },
  },
  cardWrapper: {
    backgroundColor: "white",
    height: 300,
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
    width: 320,
    height: 270,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },
  bgImage: {
    backgroundImage: `url('https://cdn.vox-cdn.com/thumbor/-R6QOFWcK3JsGx5H0gLjHikZuYg=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64035800/acastro_190618_1777_cloud_gaming_0003.0.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
  profileIcon: {
    backgroundImage: `url('https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xcba546636baf517a75d5722c4f711b8deee2f087/avatar/QmXmsFMRAxYb49uYGvZJgGRXptWXMa3a4iFMeWxUfspQhZ')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },

  textBox: {
    paddingTop: 20,
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
  wrappedProfileIcon: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
}));

function HotCollection() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.heading}>Hot Collections</h2>
            </div>
          </div>
          <div className={classes.cardWrapper}>
            <div className={classes.mainCard}>
              <div>
                <div className={classes.auctionCard}>
                  <div className="d-flex justify-content-start">
                    <div className={classes.bgImage}>
                      <div className={classes.wrappedProfileIcon}>
                        <div className={classes.profileIcon}></div>
                      </div>
                      <div className={classes.textBox}>
                        <h6 className={classes.cardText}>
                          <strong>Wrapped Crypto Pumped</strong>
                        </h6>
                        <h6 className={classes.subHeading}>
                          <strong>ERC - 721</strong>
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
                      <div className={classes.wrappedProfileIcon}>
                        <div className={classes.profileIcon}></div>
                      </div>
                      <div className={classes.textBox}>
                        <h6 className={classes.cardText}>
                          <strong>Wrapped Crypto Pumped</strong>
                        </h6>
                        <h6 className={classes.subHeading}>
                          <strong>ERC - 271</strong>
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
                      <div className={classes.wrappedProfileIcon}>
                        <div className={classes.profileIcon}></div>
                      </div>
                      <div className={classes.textBox}>
                        <h6 className={classes.cardText}>
                          <strong>Dragon of Wonder Request</strong>
                        </h6>
                        <h6 className={classes.subHeading}>
                          <strong>Highest Bid 1/1</strong>
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
                      <div className={classes.wrappedProfileIcon}>
                        <div className={classes.profileIcon}></div>
                      </div>
                      <div className={classes.textBox}>
                        <h6 className={classes.cardText}>
                          <strong>Dragon of Wonder Request</strong>
                        </h6>
                        <h6 className={classes.subHeading}>
                          <strong>Highest Bid 1/1</strong>
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

export default HotCollection;
