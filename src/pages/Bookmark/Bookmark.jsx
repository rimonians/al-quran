import React from "react";
import classes from "./Bookmark.module.css";
import Heading from "../../components/Heading/Heading";
import BookmarkContainer from "../../components/BookmarkContainer/BookmarkContainer";

const Bookmark = () => {
  return (
    <div className={classes.wrapper}>
      <Heading>Bookmark Lists</Heading>
      <BookmarkContainer />
    </div>
  );
};

export default Bookmark;
