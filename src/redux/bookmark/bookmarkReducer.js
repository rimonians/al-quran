import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_LOCALSTORAGE_BOOKMARK,
} from "./bookmarkTypes";

const initialBookmarkState = {
  bookmark: [],
};

const bookmarkReducer = (state = initialBookmarkState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      const isAlreadyBookmarked = state.bookmark.find(
        (item) =>
          item.ayat === action.payload.ayat && item.sura === action.payload.sura
      );
      const updatedBookmark = isAlreadyBookmarked
        ? state.bookmark
        : [action.payload, ...state.bookmark];
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
      return { ...state, bookmark: updatedBookmark };
    case REMOVE_BOOKMARK:
      const afterRemoved = state.bookmark.filter(
        (item) =>
          !(
            item.ayat === action.payload.ayat &&
            item.sura === action.payload.sura
          )
      );
      localStorage.setItem("bookmark", JSON.stringify(afterRemoved));
      return { ...state, bookmark: afterRemoved };
    case GET_LOCALSTORAGE_BOOKMARK:
      const localBookmark = localStorage.getItem("bookmark")
        ? JSON.parse(localStorage.getItem("bookmark"))
        : [];
      return { ...state, bookmark: localBookmark };
    default:
      return state;
  }
};

export default bookmarkReducer;
