import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
    padding: 30,
    width: "100%",
  },
  multilineColor: {
    color: "white",
  },
  noBorder: {
    border: "none",

    color: "white",
  },
  inputLabel: {
    color: "#bdbdbd",
    fontSize: 18,
    fontWeight: 600,
    paddingBottom: 0,
  },
  textField: {
    backgroundColor: "transparent",
    color: "#e5e5e5",
    borderRadius: 10,
    border: "2px solid #eeeeee",
  },
  inputField: { paddingTop: 10, paddingBottom: 10 },
  uploadCard: {
    height: 100,
    width: "100%",
    borderRadius: 10,
    border: "2px dashed #eeeeee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  helperText: {
    color: theme.palette.market.highlight,
  },
  pageTitle: {
    color: "#eeeeee",
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },
  pagePara: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 16,
    fontWeight: 400,
    width: 600,
    letterSpacing: "-0.1px",
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
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
    color: theme.palette.market.highlight,
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
  createButton: {
    color: "white",
    textTransform: "none",
    borderRadius: "30px",
    padding: "12px 20px 12px 20px",
    fontWeight: 600,

    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    fontSize: 18,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
  },
  previewImage: {
    borderRadius: "10px",
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
    height: "100%",
    padding: 25,
    paddingLeft: 45,
    borderRadius: 30,
    width: "100%",
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },
  },
  sectionCard: {
    backgroundColor: "#15134A",
    width: 600,
    minHeight: 400,
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
  previewCard: {
    height: 400,
    width: 300,
    borderRadius: 7,
    border: "1px solid #eeeeee",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bdbdbd",
    },
  },
});
function CreateNFT() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Link to="/" className={classes.link}>
        <h2 className={classes.heading}>
          <ArrowBack />
          Go Back
        </h2>
      </Link>
      <div className={classes.mainCard}>
        <h1 className={classes.pageTitle}>Create collectible</h1>

        <p className={classes.pagePara}>
          Upload your file and fill the details to get your item directly into
          marketplace.
        </p>
        <div className="row ">
          <div className="col-md-8">
            <div className="my-3">
              <div>
                <h6 className={classes.inputLabel}>Upload File</h6>
                <div className={classes.uploadCard}>
                  <input type="file" />
                </div>
              </div>
              <div className="my-3">
                <h6 className={classes.inputLabel}>Title</h6>
                <div className={classes.inputField}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      color="primary"
                      id="filled-basic"
                      variant="outlined"
                      InputProps={{
                        className: classes.multilineColor,
                        classes: { notchedOutline: classes.noBorder },
                      }}
                      placeholder="Enter title here"
                      InputLabelProps={{ className: classes.inputLabel }}
                      className={classes.textField}
                      fullWidth
                    />
                  </ThemeProvider>
                </div>
              </div>
              <div className="my-3">
                <h6 className={classes.inputLabel}>Description</h6>
                <div className={classes.inputField}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      color="primary"
                      id="filled-basic"
                      variant="outlined"
                      InputProps={{
                        className: classes.multilineColor,
                        classes: { notchedOutline: classes.noBorder },
                      }}
                      placeholder="Enter item description here"
                      InputLabelProps={{ className: classes.inputLabel }}
                      className={classes.textField}
                      fullWidth
                    />
                  </ThemeProvider>
                </div>
              </div>
              <div className="my-3">
                <h6 className={classes.inputLabel}>Price</h6>
                <div className={classes.inputField}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      type="text"
                      color="primary"
                      id="filled-basic"
                      variant="outlined"
                      InputProps={{
                        className: classes.multilineColor,
                        classes: { notchedOutline: classes.noBorder },
                      }}
                      placeholder="Enter item price here"
                      InputLabelProps={{ className: classes.inputLabel }}
                      className={classes.textField}
                      fullWidth
                    />
                  </ThemeProvider>
                </div>
                <small className={classes.helperText}>
                  Enter amount in CORGIB
                </small>
              </div>
              <div className="my-3">
                <h6 className={classes.inputLabel}>Royalties</h6>
                <div className={classes.inputField}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      color="primary"
                      id="filled-basic"
                      variant="outlined"
                      InputProps={{
                        className: classes.multilineColor,
                        classes: { notchedOutline: classes.noBorder },
                      }}
                      placeholder="Enter royalties percentage here"
                      InputLabelProps={{ className: classes.inputLabel }}
                      className={classes.textField}
                      fullWidth
                    />
                  </ThemeProvider>
                </div>
                <small className={classes.helperText}>
                  Enter in numbers like 10, 20, 50
                </small>
              </div>
              <div className="text-center">
                <Link to="/market/create">
                  {" "}
                  <Button className={classes.createButton}>Create Item</Button>
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div>
              <h5 className="text-center">Preview</h5>
              <div className={classes.previewCard}>
                <img
                  width="100%"
                  src="https://lh3.googleusercontent.com/Z4cgoB6_SeB5swDd_kS27PBJjNM87tDBksEmwFnF5BFv7JDqo7lfpHiAb499QO5lV6L-41bQSzSGx8r8QAMneibbhkfgixAnOIDG_yU"
                  alt="img"
                  className={classes.previewImage}
                />
                <div className="p-3">
                  <h6 className={classes.heading}>Redemable logo of Tshirt</h6>
                  <h6 className={classes.para}>Price: 0.9 BNB</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateNFT;
