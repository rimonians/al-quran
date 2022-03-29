import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_LOCALSTORAGE_BOOKMARK,
} from "./bookmarkTypes";

export const addBookmark = (payload) => {
  return {
    type: ADD_BOOKMARK,
    payload: payload,
  };
};

export const removeBookmark = (payload) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: payload,
  };
};

export const getLocalStorageBookmark = () => {
  return {
    type: GET_LOCALSTORAGE_BOOKMARK,
  };
};
