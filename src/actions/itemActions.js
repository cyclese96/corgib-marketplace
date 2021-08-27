import { ADD_ITEM, LOAD_ITEMS } from "./types";
import baseUrl from "./baseUrl";
import axios from "axios";

export const loadItems = () => async (dispatch) => {
  try {
    const url = `${baseUrl}/items`;
    const response = await axios.get(url);
    dispatch({
      type: LOAD_ITEMS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (itemData) => async (dispatch) => {
  try {
    const url = `${baseUrl}/items`;
    const response = await axios.post(url, itemData);
    dispatch({
      type: ADD_ITEM,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
