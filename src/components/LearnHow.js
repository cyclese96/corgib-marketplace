import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ArrowBack, Edit } from "@material-ui/icons";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import CardTravelOutlinedIcon from "@material-ui/icons/CardTravelOutlined";
import { Button } from "@material-ui/core";
import Footer from "../common/Footer";
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  cover: {
    zIndex: 0,
    height: 240,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(3, 3, 3, 0.3) ),url("https://static.news.bitcoin.com/wp-content/uploads/2021/04/78n22SOt-nft.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: `drop-shadow(0 0 0.9rem #1a237e)`,
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
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
  },
  cardSection: {
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
    justifyContent: "center",
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
    height: 330,
    width: 280,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    [theme.breakpoints.down("md")]: {},
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
    paddingBottom: 15,
    fontSize: 16,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  icon: {
    color: "#3f51b5",
    fontSize: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
}));

function LearnHow() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="mainCard">
        <div className={classes.cover}>
          <Link to="/" className={classes.link}>
            <div className="pt-3 px-3">
              <h2 className={classes.heading}>
                <ArrowBack />
                How It Work
              </h2>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="d-flex justify-content-between">
            <div className="mt-3">
              <h2 className={classes.heading}>Create and sell NFTs</h2>
            </div>
          </div>
          <div className={classes.cardSection}>
            <Link to="/item-detail" className={classes.link}>
              <div className={classes.nftCard}>
                <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                <div className={classes.heading}>Set up your wallet</div>
                <hr style={{ height: 5, color: "grey" }}></hr>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>
                    Once you’ve set up your Meta Mask, connect it to BSC Network
                    by clicking the Connect Button in the top right corner.
                    Learn about the wallets we support.
                  </h6>
                </div>
                <div className="text-center">
                  <Button className={classes.normalButton}>
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </Link>
            <Link to="/item-detail" className={classes.link}>
              <div className={classes.nftCard}>
                <PlaylistAddOutlinedIcon className={classes.icon} />
                <div className={classes.heading}>Create your Collection</div>
                <hr style={{ height: 5, color: "grey" }}></hr>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>
                    Click Create and set up your collection. Add social links, a
                    description, profile & banner images, and set a secondary
                    sales fee.
                  </h6>
                </div>
                <div className="text-center">
                  <Link to="/market/profile">
                    {" "}
                    <Button className={classes.normalButton}>
                      Create Profile
                    </Button>
                  </Link>{" "}
                </div>
              </div>
            </Link>
            <Link to="/item-detail" className={classes.link}>
              <div className={classes.nftCard}>
                <PlaylistAddCheckOutlinedIcon className={classes.icon} />
                <div className={classes.heading}>Add your NFTs</div>
                <hr style={{ height: 5, color: "grey" }}></hr>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description, and customize your NFTs with
                    properties, stats, and unlockable content.
                  </h6>
                </div>
                <div className="text-center">
                  <Link to="/market/create">
                    {" "}
                    <Button className={classes.normalButton}>Create NFT</Button>
                  </Link>{" "}
                </div>
              </div>
            </Link>
            <Link to="/item-detail" className={classes.link}>
              <div className={classes.nftCard}>
                <CardTravelOutlinedIcon className={classes.icon} />
                <div className={classes.heading}>Link for Sale</div>
                <hr style={{ height: 5, color: "grey" }}></hr>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. You choose how you want to sell
                    your NFTs!
                  </h6>
                </div>
                <div className="text-center">
                  <Link to="/market/create">
                    {" "}
                    <Button className={classes.normalButtonBid}>
                      Place a Bid
                    </Button>
                  </Link>{" "}
                </div>
              </div>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default LearnHow;
