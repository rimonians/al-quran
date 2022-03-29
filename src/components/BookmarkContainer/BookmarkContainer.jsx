import React from "react";
import classes from "./BookmarkContainer.module.css";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { useSelector } from "react-redux";

const BookmarkContainer = () => {
  const bookmark = useSelector((state) => state.bookmark.bookmark);

  return (
    <div className={classes.bookmarkContainer}>
      {bookmark.map((item) => (
        <BookmarkCard key={Math.random()} bookmark={item} />
      ))}
    </div>
  );
};

export default BookmarkContainer;
