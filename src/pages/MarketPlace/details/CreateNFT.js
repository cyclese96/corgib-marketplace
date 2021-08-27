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
import { connect } from "react-redux";
import { createItem } from "../../../actions/itemActions";

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    minHeight: "100vh",
    padding: 30,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
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
      width: "100%",
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
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
  },

  mainCard: {
    height: "100%",
    padding: 25,
    paddingLeft: 45,
    borderRadius: 30,
    width: "100%",
    background: `#303f9f`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
      padding: 20,
    },
  },
  sectionCard: {
    backgroundColor: "#303f9f",
    width: 600,
    minHeight: 400,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
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
    [theme.breakpoints.down("md")]: {
      height: 300,
      width: 250,
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bdbdbd",
    },
  },
});
function CreateNFT({ createItem, auth: { user } }) {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [category, setCatogory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [royalties, setRoyalties] = useState("");

  const createNft = async () => {
    console.log("Data of NFT ");
    const itemData = {
      title: title,
      description: description,
      address: user,
      royalties: royalties,
      category: category,
      price: price,
    };

    await createItem(itemData);
    console.log(itemData);
  };

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
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
                  <input type="file" onChange={onChangePicture} />
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </ThemeProvider>
                </div>
              </div>
              <div className="my-3">
                <h6 className={classes.inputLabel}>Category</h6>
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
                      placeholder="Enter item 
                      category here"
                      InputLabelProps={{ className: classes.inputLabel }}
                      className={classes.textField}
                      fullWidth
                      value={category}
                      onChange={(e) => setCatogory(e.target.value)}
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={royalties}
                      onChange={(e) => setRoyalties(e.target.value)}
                    />
                  </ThemeProvider>
                </div>
                <small className={classes.helperText}>
                  Enter in numbers like 10, 20, 50
                </small>
              </div>
              <div className="text-center">
                {/* <Link to="/market/create"> */}{" "}
                <Button className={classes.createButton} onClick={createNft}>
                  Create Item
                </Button>
                {/* </Link>{" "} */}
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
                  src={imgData}
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

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, { createItem })(CreateNFT);
