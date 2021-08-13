import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authenticateUser, signOutUser } from "./../actions/authActions";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
} from "./../actions/web3Actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "white",
    textTransform: "none",
    borderRadius: "50px",
    padding: "8px 16px 8px 16px",
    fontWeight: 600,
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    fontSize: 14,
  },
}));

function ConnectButton({ authenticateUser }) {
  const classes = useStyles();
  const [error, setError] = useState("");

  const connectWallet = async () => {
    let networkStatus = await checkCorrectNetwork();
    if (networkStatus) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const accountAddress = accounts[0];
      authenticateUser(accountAddress);
      setError("");
    } else {
      setError("Only support BSC network");
    }
  };

  return (
    <div className="my-5 text-center">
      <div className="mt-5 text-center">
        <h4 style={{ color: "yellow" }}>Wallet Not Connected!</h4>
        <p style={{ color: "white" }}>
          Connect your wallet first and then only you can view matches.
        </p>
      </div>
      <div className="mt-5">
        <Button className={classes.button} onClick={connectWallet}>
          Connect your wallet
        </Button>
        <div className="mt-2" style={{ color: "yellow" }}>
          {error}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = { authenticateUser };

export default connect(mapStateToProps, mapDispatchToProps)(ConnectButton);
