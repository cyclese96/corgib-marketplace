import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
    paddingBottom: 10,
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
    backgroundColor: "white",
    height: 370,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
  },
  nftCard: {
    backgroundColor: "#15134A",
    height: 340,
    width: 210,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {},
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

  bgImage: {
    backgroundImage: `url('https://nexo.io/media/pages/modules/header-bitcoin-halving/d70323b9df/nexo-bitcoin-halving.gif')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 260,
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
  normalButtonRight: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
    marginLeft: 20,
  },
  nftCardRight: {
    backgroundColor: "#15134A",
    width: 400,
    height: 320,
    padding: 10,
    paddingTop: 30,
    paddingLeft: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  bgImageRight: {
    backgroundImage: `url('https://fsa.zobj.net/crop.php?r=B1ulGGYSPQjLYiGAzJ60q2qP2YC5agZVxpU0B-VPPbyeDRWxmg-YwVKyN337OOg9dZ7Ut5a8opr6DTOyqlmyzjmzEeYHAadKOz7UnK6NBRnOybChyy9IBQDqg8kNTksRzbMV2CkIAEiEbZGfvPq4B5jUKBSYop2c9FLMsvYEAPhBaLdgaL99kQuo0gVY1_xD2RmxhiHSlYqFoFKI')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: "30%",
  },

  textBoxRight: {
    paddingLeft: 15,
  },
  cardTextRight: {
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
  innerCard: {
    // backgroundColor: "#004D40",
    height: 200,
    width: 320,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    background: `linear-gradient(to right,
      #512DA8, #1a237e)`,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
    marginTop: 15,
  },
  textBoxRight1: {
    fontSize: 20,
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
}));
function TrendingItems() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.heading}>Trending Items</h2>
            </div>
          </div>
          <div className={classes.mainCard}>
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
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </Link>
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
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </Link>
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
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-end">
            <div className={classes.viewAllRecent}>
              <Link to="/market/recent" className={classes.link}>
                View All
              </Link>
            </div>
          </div>
          <div className={classes.mainCard}>
            <div>
              <div className={classes.nftCardRight}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImageRight}></div>
                  <div className={classes.textBoxRight}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardTextRight}>
                        <strong>Fortnite Battle Royal</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardTextRIght}>Online Game</h6>
                  </div>
                  <div>
                    <Button className={classes.normalButtonRight}>
                      Follow
                    </Button>
                    <FavoriteBorderIcon
                      style={{ paddingLeft: 10, fontSize: 30 }}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes.innerCard}>
                    <div className={classes.textBoxRight1}>
                      <StarBorderIcon />
                      The Create Network
                      <StarBorderIcon /> Auction Ending Time
                      <StarBorderIcon /> Place a bid
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

export default TrendingItems;
