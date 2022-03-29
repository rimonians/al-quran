import { combineReducers } from "redux";
import suraReducer from "./sura/suraReducer";
import ayatsReducer from "./ayats/ayatsReducer";
import bookmarkReducer from "./bookmark/bookmarkReducer";

const rootReducer = combineReducers({
  sura: suraReducer,
  ayats: ayatsReducer,
  bookmark: bookmarkReducer,
});

export default rootReducer;
