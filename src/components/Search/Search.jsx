import React, { useEffect } from "react";
import classes from "./Search.module.css";
import { useDispatch } from "react-redux";
import { suraSearch } from "../../redux/sura/suraActions";

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(suraSearch(""));
  }, [dispatch]);
  
  return (
    <div className={classes.searchControll}>
      <input
        type="text"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search sura by name id or ayat no"
        onChange={(e) => dispatch(suraSearch(e.target.value))}
      />
    </div>
  );
};

export default Search;
