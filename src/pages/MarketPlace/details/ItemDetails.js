import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ArrowBack, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import CheckOutPopup from "../../../components/CheckOutPopup";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Footer from "../../../common/Footer";
import AllItems from "../../../components/AllItems";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
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
    padding: 15,
    borderRadius: 30,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  sectionCard: {
    backgroundColor: "#15134A",
    width: 600,
    minHeight: 600,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  textBox: {
    padding: 20,
  },
  nftName: {
    color: theme.palette.market.textPrimary,
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 28,
    textAlign: "left",

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  creatorName: {
    color: theme.palette.market.textPrimary,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    paddingBottom: 0,
    fontSize: 16,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  itemImage: {
    backgroundImage: `url('https://lh3.googleusercontent.com/Z4cgoB6_SeB5swDd_kS27PBJjNM87tDBksEmwFnF5BFv7JDqo7lfpHiAb499QO5lV6L-41bQSzSGx8r8QAMneibbhkfgixAnOIDG_yU')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 500,
    width: "100%",
    borderRadius: "4%",
    marginBottom: 20,
  },
  highlight: {
    color: `rgba(89, 210, 188, 1)`,
  },
  tab: {
    fontSize: 14,
    fontWeight: 600,
    color: "white",
    backgroundColor: "#222831",
  },
  profileNftCard: {
    backgroundColor: "#9DC6A7",
    width: 300,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  profileBgImage: {
    backgroundImage: `url('https://www.designesia.com/themes/gigaland/images/author/author-5.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: "40%",
  },

  profileTextBox: {
    paddingLeft: 15,
  },
  profilCardText: {
    color: "white",
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
  profileButton: {
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
  profileCardText: {
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

function ItemDetails() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.background}>
      <CheckOutPopup open={open} handleClose={handleClose} />
      <Link to="/" className={classes.link}>
        <h2 className={classes.heading}>
          <ArrowBack />
          Item Detail
        </h2>
      </Link>
      <div className={classes.mainCard}>
        <div className="row">
          <div className="col-md-6">
            <div className={classes.sectionCard}>
              <div className={classes.itemImage}></div>
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <div className={classes.sectionCard}>
              {" "}
              <div className={classes.textBox}>
                <h6 className={classes.nftName}>
                  Tommy Kill Hell NFT Collection 2017
                </h6>
                <h6 className={classes.creatorName}>
                  By <strong className={classes.highlight}>Carry Minati</strong>
                </h6>
                <div className="mt-5">
                  <p>
                    Experience the art created and animated by Artificial
                    Intelligence! Rewatch this video time and time again. This
                    video will calm you down and become a perfect display piece
                    for large-scale installations. You will own a 100% unique
                    collector’s item that nobody else in the world will ever
                    have. 10 percent of royalty profits go to charity!
                  </p>
                </div>
                <div className="my-4">
                  <div className={classes.root}>
                    <AppBar position="static" color="default">
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        className={classes.tab}
                        indicatorColor="primary"
                      >
                        <Tab label="Purchase By" {...a11yProps(0)} />
                        <Tab
                          classname={classes.tabSection}
                          label="Details"
                          {...a11yProps(1)}
                        />
                        <Tab label="History" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                      <p>No active bid yet</p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <div>
                        <div className="d-flex justify-content-start">
                          <div className={classes.profileBgImage}></div>
                          <div className={classes.profileTextBox}>
                            <Link to="/market/profile" className={classes.link}>
                              <h6 className={classes.profileCardText}>
                                <strong>Carry Minati</strong>
                              </h6>
                            </Link>
                            <h6 className={classes.profileCardText}>
                              <strong>Add : </strong>
                              0x5b7d8993e...b17d
                            </h6>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <div>
                        <div className="d-flex justify-content-start">
                          <div className={classes.profileBgImage}></div>
                          <div className={classes.profileTextBox}>
                            <Link to="/market/profile" className={classes.link}>
                              <h6 className={classes.profileCardText}>
                                <strong>Carry Minati</strong>
                              </h6>
                            </Link>
                            <h6 className={classes.profileCardText}>
                              <strong>Transferred to : </strong>
                              0x5b7d8993e...b17d
                            </h6>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="text-center">
                    <Button
                      className={classes.actionButton}
                      onClick={handleClickOpen}
                    >
                      Buy Now
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button className={classes.normalButton}>
                      Save For Later
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllItems />
      <Footer />
    </div>
  );
}
export default ItemDetails;
