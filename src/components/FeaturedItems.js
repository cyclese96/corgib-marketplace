import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

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
  headingRecently: {
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
      paddingTop: 60,
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
  viewAllRecently: {
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
      paddingTop: 60,
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
    background: `linear-gradient(to right,#ede7f6, #ede7f6)`,
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
}));

function FeaturedItem() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.heading}>Featured Items</h2>
            </div>
            <div className={classes.viewAll}>
              <Link to="/all-items" className={classes.link}>
                View All
              </Link>
            </div>
          </div>
          <div className={classes.mainCard}>
            <SingleCard />
            <SingleCard />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.headingRecently}>Recently Added</h2>
            </div>
            <div className={classes.viewAllRecently}>
              <Link to="/all-items" className={classes.link}>
                View All
              </Link>
            </div>
          </div>
          <div className={classes.mainCard}>
            <SingleCard />
            <SingleCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedItem;
