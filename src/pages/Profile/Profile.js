import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
import { ArrowBack, Edit } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
    paddingLeft: 30,
    paddingRight: 30,

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
  para: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",

    paddingBottom: 20,
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
  textContainer: {
    padding: 20,
  },
  actionButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "12px",
    padding: "8px 16px 8px 16px",
    fontWeight: 500,
    marginRight: 12,
    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
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
  mainCard: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 10,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  sectionCard1: {
    marginTop: -120,
    backgroundColor: "#15134A",
    height: 550,
    width: "100%",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionCard2: {
    marginTop: 20,
    // backgroundColor: '#15134A',
    width: "100%",
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  profileImage: {
    backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/629/360/993/moneyheist-lacasadepapel-spain-the-professor-hd-wallpaper-thumb.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 120,
    width: 120,
    borderRadius: "45%",
    marginBottom: 20,
  },

  textBox: {
    textAlign: "center",
  },
  textBoxMain: {
    textAlign: "center",
    paddingTop: 10,
  },
  cardText: {
    color: theme.palette.market.textPrimary,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 16,
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  address: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 13,
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  cover: {
    zIndex: 0,
    height: 240,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(3, 3, 3, 0.3) ),url("https://blog.bitpanda.com/content/images/2021/03/what_is_nft_en.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: `drop-shadow(0 0 0.9rem #1a237e)`,
  },

  nftCard: {
    backgroundColor: "#15134A",
    height: "100%",
    width: 300,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
    [theme.breakpoints.down("md")]: {
      width: 240,
      height: 240,
      marginBottom: 10,
    },
  },
  bgImage: {
    backgroundImage: `url('https://i1.sndcdn.com/avatars-000298736131-6gygpv-t500x500.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 250,
    borderRadius: 10,
  },
  iconWrapper: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    "&:hover": {
      color: "#1EAE98",
    },
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.mainCard}>
        <div className={classes.cover}>
          <Link to="/" className={classes.link}>
            <div className="pt-3 px-3">
              <h2 className={classes.heading}>
                <ArrowBack />
                My Profile
              </h2>
            </div>
          </Link>
        </div>
        <div className="row container" style={{ zIndex: 1 }}>
          <div className="col-md-3">
            <div className={classes.sectionCard1}>
              <div
                className="d-flex flex-column justify-content-center"
                style={{ padding: 20 }}
              >
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <div className={classes.profileImage} alt="profile" />
                  </div>
                  <div className={classes.textBox}>
                    <h6 className={classes.cardText}>
                      <strong>Carry Minati</strong>
                    </h6>
                    <h6 className={classes.address}>
                      0x9D7117a07fca918A5FA4F448
                    </h6>
                  </div>
                  <div className="mt-3">
                    <p className={classes.para}>
                      Carry is a creator of minimalistic ⨯ bold graphic and
                      digital artwork.
                      <br />✹ Artist / Creative Director
                      <br /> ✹ #NFT minting
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <Button className={classes.normalButton}>
                  <Edit style={{ fontSize: 16 }} />
                  Edit Profile
                </Button>
              </div>
              <hr style={{ height: 2 }} />
              <div className="text-center mt-3">
                <div className="mt-3">
                  <p className={classes.para}>Member since 2021</p>
                  <div className={classes.iconWrapper}>
                    <InstagramIcon className={classes.icons} />
                    <FacebookIcon className={classes.icons} />
                    <TwitterIcon className={classes.icons} />
                    <LinkedInIcon className={classes.icons} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className={classes.sectionCard2}>
              <div className="mt-3 d-flex justify-content-start">
                <Button>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "6px 12px 6px 12px",
                      borderRadius: "30px",
                      marginRight: 10,
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: 14 }}>
                      Collectibles
                    </span>
                  </div>
                </Button>
                <Button>
                  {" "}
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "6px 12px 6px 12px",
                      borderRadius: "30px",
                      marginRight: 10,
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: 14 }}>
                      {" "}
                      On Sale
                    </span>
                  </div>
                </Button>
                <Button>
                  {" "}
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "6px 12px 6px 12px",
                      borderRadius: "30px",
                      marginRight: 10,
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: 14 }}>
                      Created
                    </span>
                  </div>
                </Button>
                <Button>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "6px 12px 6px 12px",
                      borderRadius: "30px",
                      marginRight: 10,
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: 14 }}>
                      {" "}
                      Likes
                    </span>
                  </div>
                </Button>
              </div>

              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className={classes.nftCard}>
                      <div className={classes.bgImage}></div>
                      <div className={classes.textBoxMain}>
                        <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                        <h6>
                          <strong>Carry Minati</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className={classes.nftCard}>
                      <div className={classes.bgImage}></div>
                      <div className={classes.textBoxMain}>
                        <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                        <h6>
                          <strong>Carry Minati</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className={classes.nftCard}>
                      <div className={classes.bgImage}></div>
                      <div className={classes.textBoxMain}>
                        <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                        <h6>
                          <strong>Carry Minati</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Profile;
