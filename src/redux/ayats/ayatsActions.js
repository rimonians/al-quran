import axios from "axios";
import {
  FETCH_AYATS_REQUEST,
  FETCH_AYATS_SUCCESS,
  FETCH_AYATS_FAILURE,
  AYATS_SEARCH,
} from "./ayatsTypes";

export const fetchAyatsRequest = () => {
  return {
    type: FETCH_AYATS_REQUEST,
  };
};

export const fetchAyatsSuccess = (payload) => {
  return {
    type: FETCH_AYATS_SUCCESS,
    payload: payload,
  };
};

export const fetchAyatsFailure = (payload) => {
  return {
    type: FETCH_AYATS_FAILURE,
    payload: payload,
  };
};

export const fetchAyats = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchAyatsRequest());
      const urls = [
        axios.get("http://localhost:3000/data/quran_ar.json"),
        axios.get("http://localhost:3000/data/quran_bn.json"),
        axios.get("http://localhost:3000/data/quran_en.json"),
      ];
      const response = await Promise.all(urls);
      const dataset = response.map((el) => el.data);
      dispatch(fetchAyatsSuccess(dataset));
    } catch (err) {
      dispatch(fetchAyatsFailure(err.message));
    }
  };
};

export const ayatsSearch = (value) => {
  return {
    type: AYATS_SEARCH,
    payload: value,
  };
};
