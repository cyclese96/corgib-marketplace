import { ADD_ITEM, LOAD_ITEMS, LOAD_ITEMS_ERROR } from "../actions/types";

const initalState = {
  item: null,
  items: [],
  loading: false,
  error: {},
};

export default function (state = initalState, action) {
  // action object --->  { type: 'action type', payload:'data'   }
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case LOAD_ITEMS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
