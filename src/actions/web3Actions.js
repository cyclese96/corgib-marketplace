import constants from './../utils/constants';
import web3 from './../web';
//Check wallet available
//Returns boolean true or false
export const checkWalletAvailable = () => {
  if (typeof window.ethereum !== 'undefined') {
    //console.log('Yes available');

    if (window.ethereum) {
      //console.log('Yes metamask available');
      return true;
    } else {
      //console.log('No, Not available');
      return false;
    }
  } else {
    return false;
  }
};

//Check correct network
//Returns boolean true or false
export const checkCorrectNetwork = async () => {
  //console.log(chainID);
  if (window.ethereum.networkVersion === constants.network_id) {
    //console.log(constants.network_id);
    return constants.network_id;
  } else {
    //console.log('Other Network');
    return constants.network_id;
  }
};
