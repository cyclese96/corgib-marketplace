import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TrendingCard from "../../../components/TrendingCard";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 30,
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
  mainCardRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 360,
    padding: 10,
    borderRadius: 10,
    marginTop: 45,
    width: "100%",
    background: `linear-gradient(to right,#ede7f6, #ede7f6)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: 300,
      marginTop: 70,
      width: 300,
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
    backgroundColor: "#303f9f",
    width: 350,
    height: 320,
    padding: 10,
    paddingTop: 30,
    paddingLeft: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: 260,
      height: 270,
    },
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
    height: 180,
    width: 300,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    background: `linear-gradient(to right,
      #512DA8, #1a237e)`,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
    marginTop: 15,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 200,
      height: 130,
    },
  },

  textBoxRight1: {
    fontSize: 20,
    color: "white",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      width: 200,
      height: 150,
    },
  },
  cardTextRight1: {
    fontSize: 16,
    color: "#FAFAFA",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: 6,
    },
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
              <h2 className={classes.heading}>Trending Item</h2>
            </div>
            <div className={classes.viewAll}>
              <Link to="/all-recent" className={classes.link}>
                View All
              </Link>
            </div>
          </div>
          <div className={classes.mainCard}>
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
          </div>
        </div>
        <div className="col-md-4">
          <div className={classes.mainCardRight}>
            <div>
              <div className={classes.nftCardRight}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImageRight}></div>
                  <div className={classes.textBoxRight}>
                    <Link to="/profile" className={classes.link}>
                      <h6 className={classes.cardTextRight}>
                        <strong>Fortnite Battle Royal</strong>
                        <h6 className={classes.cardTextRight1}>Online Game</h6>
                      </h6>
                    </Link>
                  </div>
                  <div>
                    <Button className={classes.normalButtonRight}>
                      Follow
                    </Button>
                  </div>
                </div>
                <div>
                  <div className={classes.innerCard}>
                    <div className={classes.textBoxRight1}>
                      <StarBorderIcon fontSize="small" />
                      The Create Network
                      <StarBorderIcon fontSize="small" /> Auction Ending Time
                      <StarBorderIcon fontSize="small" /> Place a bid
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
