import constants from './../utils/constants';
import web3 from './../web';
import { GET_CURRENT_USER, REMOVE_CURRENT_USER, TRANSACTION_HIT } from './types';

//User authenticate
export const authenticateUser = (address) => (dispatch) => {
  dispatch({
    type: GET_CURRENT_USER,
    payload: address,
  });

  localStorage.setItem('userAddress', address);
};

//User signout
export const signOutUser = () => (dispatch) => {
  dispatch({
    type: REMOVE_CURRENT_USER,
    payload: 'remove',
  });
  localStorage.removeItem('userAddress');
};

//Transaction Changes
export const transactionHit = () => (dispatch) => {
  dispatch({
    type: TRANSACTION_HIT,
    payload: 'hit',
  });
};
