import { GET_CURRENT_USER, REMOVE_CURRENT_USER, TRANSACTION_HIT } from '../actions/types';

const initalState = {
  authenticated: false,
  user: null,
  transaction: 1,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case REMOVE_CURRENT_USER:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case TRANSACTION_HIT:
      return {
        ...state,
        transaction: state.transaction + 1,
      };

    default:
      return state;
  }
}
