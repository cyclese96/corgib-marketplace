import { ADD_ITEM, LOAD_ITEMS, LOAD_ITEMS_ERROR } from "./types";
import axios from "axios";

export const loadItems = () => async (dispatch) => {
  try {
    // FETCH DATA FROM BACKEND AND DISPATCH IT TO REDUCER
    const api_end_point = `http://localhost:3001/items`;
    const response = await axios.get(api_end_point);
    dispatch({
      type: LOAD_ITEMS,
      payload: response.data,
    });
  } catch (error) {
    console.log("get data ", error);
    dispatch({
      type: LOAD_ITEMS_ERROR,
    });
  }
};

export const createItem = (itemData) => async (dispatch) => {
  try {
    // FETCH DATA FROM BACKEND AND DISPATCH IT TO REDUCER
    const api_end_point = `http://localhost:3001/item`;
    const response = await axios.post(api_end_point, itemData);
    dispatch({
      type: ADD_ITEM,
      payload: response.data,
    });
  } catch (error) {
    console.log("get data ", error);
    dispatch({
      type: LOAD_ITEMS_ERROR,
    });
  }
};
