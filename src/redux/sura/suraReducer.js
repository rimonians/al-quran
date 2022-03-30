import {
  FETCH_SURA_REQUEST,
  FETCH_SURA_SUCCESS,
  FETCH_SURA_FAILURE,
  SURA_SEARCH,
} from "./suraTypes";

const initialSuraState = {
  loading: false,
  sura: [],
  filtered: [],
  err: "",
};

const suraReducer = (state = initialSuraState, action) => {
  switch (action.type) {
    case FETCH_SURA_REQUEST:
      return { ...state, loading: true };
    case FETCH_SURA_SUCCESS:
      return {
        ...state,
        loading: false,
        sura: action.payload,
        filtered: action.payload,
        err: "",
      };
    case FETCH_SURA_FAILURE:
      return {
        ...state,
        loading: false,
        sura: [],
        filtered: [],
        err: action.payload,
      };
    case SURA_SEARCH:
      const filteredSura = state.sura.filter(
        (item) =>
          item.id === Number(action.payload) ||
          item.transliteration
            .toLowerCase()
            .includes(action.payload.toLowerCase().trim()) ||
          item.translation
            .toLowerCase()
            .includes(action.payload.toLowerCase().trim())
      );
      return { ...state, filtered: filteredSura };
    default:
      return state;
  }
};

export default suraReducer;
