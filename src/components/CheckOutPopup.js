import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../common/CustomButton";
import HttpsIcon from "@material-ui/icons/Https";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#121827",
    color: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 400,
    height: 520,
    [theme.breakpoints.down("sm")]: {
      width: 320,
      height: 350,
    },
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    color: "white",
  },
  subheading: {
    fontSize: 12,
    fontWeight: 400,
    color: "white",
  },

  checkoutDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "85%",
  },
  quantity: {
    color: "#919191",
    color: "grey",
    borderTop: "2px solid ",
    width: "100%",
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  price: {
    color: "#919191",
    color: "grey",
    borderTop: "2px solid ",
    width: "100%",
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 10,
  },
  balance: {
    paddingRight: 50,
    display: "flex",
    width: "100%",
    paddingRight: 20,
    justifyContent: "space-between",
  },
  purchase: {
    paddingLeft: 27,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
  },
  actionButton: {
    background: `#25069A`,
    color: "white",
    width: 250,
    height: 45,
    marginBottom: 10,
    borderRadius: 40,
    border: "1px solid white",
    cursor: "pointer",
    "&:hover": {
      background: "#180465",
    },
  },
  cancelButton: {
    background: "white",
    color: "black",
    width: 250,
    height: 45,
    borderRadius: 40,
    cursor: "pointer",
    "&:hover": {
      background: "black",
      color: "red",
    },
  },
}));

const CheckOutPopup = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        disableBackdropClick
        className={classes.dialog}
        color="transparent"
        PaperProps={{
          style: { borderRadius: 15 },
        }}
      >
        <div className={classes.background}>
          <DialogTitle onClose={() => handleClose()}>
            <span className={classes.heading}>Checkout</span>
          </DialogTitle>

          <div className={classes.checkoutDetail}>
            <div>
              <p className={classes.subHeading}>
                You are about to purchase <strong>Tommy Kill Hell</strong> from{" "}
                <strong>Marketplace</strong>
              </p>
            </div>
            <p>1</p>
            <span className={classes.quantity}>
              Qauntity <HttpsIcon />
            </span>
            <p>2.8</p>
            <span className={classes.price}>Price per Edition</span>
          </div>
          <div className={classes.balance}>
            <span className={classes.purchase}>Your Purchase</span>
            <span>0.33547 BNB</span>
          </div>
          <div className={classes.balance}>
            <span className={classes.purchase}>You will Pay</span>
            <span>0.33547 BNB</span>
          </div>

          <div className={classes.buttonWrapper}>
            <Button variant="contained" className={classes.actionButton}>
              Confirm Purchase
            </Button>

            <Button
              variant="contained"
              onClick={handleClose}
              className={classes.cancelButton}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CheckOutPopup;
