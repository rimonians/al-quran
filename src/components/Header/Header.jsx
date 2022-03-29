import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaQuran } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import numbering from "../../utils/numbering";

const Header = () => {
  const bookmark = useSelector((state) => state.bookmark.bookmark);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <FaQuran />
          <span>Al Quran</span>
        </Link>
      </div>
      <div className={classes.links}>
        <Link to="/bookmark">
          <BsFillJournalBookmarkFill /> Bookmark ({numbering(bookmark.length)})
        </Link>
      </div>
    </div>
  );
};

export default Header;
