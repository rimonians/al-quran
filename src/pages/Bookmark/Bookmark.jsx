import React, { useEffect } from "react";
import classes from "./Bookmark.module.css";
import Heading from "../../components/Heading/Heading";
import BookmarkContainer from "../../components/BookmarkContainer/BookmarkContainer";
import scrollTop from "../../utils/scrollTop";

const Bookmark = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Heading>বুকমার্ক তালিকা</Heading>
      <BookmarkContainer />
    </div>
  );
};

export default Bookmark;
