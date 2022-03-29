import axios from "axios";
import {
  FETCH_SURA_REQUEST,
  FETCH_SURA_SUCCESS,
  FETCH_SURA_FAILURE,
  SURA_SEARCH,
} from "./suraTypes";

export const fetchSuraRequest = () => {
  return {
    type: FETCH_SURA_REQUEST,
  };
};

export const fetchSuraSuccess = (payload) => {
  return {
    type: FETCH_SURA_SUCCESS,
    payload: payload,
  };
};

export const fetchSuraFailure = (payload) => {
  return {
    type: FETCH_SURA_FAILURE,
    payload: payload,
  };
};

export const fetchSura = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchSuraRequest());
      const response = await axios.get(
        "https://rimonians-al-quran.netlify.app/data/sura_info.json"
      );
      dispatch(fetchSuraSuccess(response.data));
    } catch (err) {
      dispatch(fetchSuraFailure(err.message));
    }
  };
};

export const suraSearch = (value) => {
  return {
    type: SURA_SEARCH,
    payload: value,
  };
};
