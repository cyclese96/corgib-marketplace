import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 30,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "-500",
  },
  card: {
    backgroundColor: "white",
    height: 300,
    width: "100%",
    padding: 20,
    borderRadius: 10,
    background: `linear-gradient(to right,rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.4)),
    url('images/cardwave.png') no-repeat center center`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heading: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: "-0.8px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.market.textSecondary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: "100%",
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
    background: `linear-gradient(to right,#15134A, #1C1656)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1C1656)`,
  },
  image: {
    height: "320px",
    [theme.breakpoints.down("md")]: {
      height: "0",
    },
  },
}));

function TopCard() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <div className="row">
          <div className="col-md-7">
            <div className={classes.textContainer}>
              <h2 className={classes.heading}>One Stop NFT Marketplace</h2>
              <h4 className={classes.para}>
                Discover most trending NFTs created by users to get most of the
                ecosystem.
              </h4>
              <div className="d-flex justify-content-start">
                <div className="text-center">
                  <Link to="/market/create">
                    {" "}
                    <Button className={classes.actionButton}>Create NFT</Button>
                  </Link>{" "}
                </div>
                <div className="text-center">
                  <Button className={classes.normalButton}>Learn How</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-end align-items-end">
              <img
                src="https://i.pinimg.com/originals/d8/c7/1e/d8c71e11c94a618331dedbbae48be15d.png"
                alt="right"
                className={classes.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopCard;
