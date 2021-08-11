import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  para: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
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
    marginLeft: 20,
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
    height: 200,
    padding: 15,
    borderRadius: 30,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  nftCard: {
    backgroundColor: "#15134A",
    width: 300,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  bgImage: {
    backgroundImage: `url('https://hiseye.org/wp-content/uploads/2021/03/CryptoKitty.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: "40%",
  },

  textBox: {
    paddingLeft: 15,
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
}));

function TopArtist() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className={classes.heading}>Top Creators</h2>
            </div>
            <div className={classes.viewAll}></div>
          </div>
          <div className={classes.mainCard}>
            <div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>

                    <h6 className={classes.cardText}>23 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Denni Lie</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>232 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>23 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>232 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>23 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>232 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>23 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
              <div className={classes.nftCard}>
                <div className="d-flex justify-content-start">
                  <div className={classes.bgImage}></div>
                  <div className={classes.textBox}>
                    <Link to="/market/profile" className={classes.link}>
                      <h6 className={classes.cardText}>
                        <strong>Denii Lie</strong>
                      </h6>
                    </Link>
                    <h6 className={classes.cardText}>232 Items</h6>
                  </div>
                </div>
                <div>
                  <Button className={classes.normalButton}>Follow</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopArtist;
