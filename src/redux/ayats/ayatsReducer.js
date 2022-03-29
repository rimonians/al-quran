import {
  FETCH_AYATS_REQUEST,
  FETCH_AYATS_SUCCESS,
  FETCH_AYATS_FAILURE,
  AYATS_SEARCH,
} from "./ayatsTypes";

const initialAyatsState = {
  loading: false,
  ayats: [],
  filtered: [],
  err: "",
};

const ayatsReducer = (state = initialAyatsState, action) => {
  switch (action.type) {
    case FETCH_AYATS_REQUEST:
      return { ...state, loading: true };
    case FETCH_AYATS_SUCCESS:
      return {
        ...state,
        loading: false,
        ayats: action.payload,
        filtered: [],
        err: "",
      };
    case FETCH_AYATS_FAILURE:
      return {
        ...state,
        loading: false,
        ayats: [],
        filtered: [],
        err: action.payload,
      };
    case AYATS_SEARCH:
      const filteredArAyats = state.ayats[0].find(
        (item) => item.id === Number(action.payload)
      );
      const filteredBnAyats = state.ayats[1].find(
        (item) => item.id === Number(action.payload)
      );
      const filteredEnAyats = state.ayats[2].find(
        (item) => item.id === Number(action.payload)
      );
      return {
        ...state,
        filtered: [filteredArAyats, filteredBnAyats, filteredEnAyats],
      };
    default:
      return state;
  }
};

export default ayatsReducer;
