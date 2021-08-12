//READ

import { corgibCoinContract } from "../contracts/connection";

//Returns PWR Balance of User
export const getCorgibBalance = async (userAddress) => {
  const contract = corgibCoinContract();
  console.log(contract._address);
  let balance = await contract.methods.balanceOf(userAddress).call();
  console.log("bal", balance);
  return balance;
};
