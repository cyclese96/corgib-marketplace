import {
  constants,
  corgibMemeCoinMainnet,
  corgibMemeCoinTestent,
} from "../../utils/constants";
import corgibAbi from "../abis/CORGIB.json";
import Web3 from "web3";

export const corgibCoinContract = () => {
  const address =
    constants.network_type === 1
      ? corgibMemeCoinTestent
      : corgibMemeCoinMainnet;

  const abi = corgibAbi;
  const connection = getCurrentConnection(abi, address);
  return connection;
};

const getCurrentConnection = (abi, contractAddress) => {
  // const web3 = new Web3(new Web3.providers.HttpProvider(bscConfig.network_rpc_testnet));
  // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
  const web3 = new Web3(window.ethereum);
  return new web3.eth.Contract(abi, contractAddress);
};
