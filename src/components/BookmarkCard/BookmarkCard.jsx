import React from "react";
import classes from "./BookmarkCard.module.css";
import { Link } from "react-router-dom";
import numbering from "../../utils/numbering";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../../redux/bookmark/bookmarkActions";
import { BsBookmarkXFill } from "react-icons/bs";
import { toast } from "react-toastify";

const BookmarkCard = ({ bookmark }) => {
  const dispatch = useDispatch();
  const removeBookmarkPayload = {
    sura: bookmark.sura,
    ayat: bookmark.ayat,
  };

  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(removeBookmarkPayload));
    toast.error("Item successfully removed from bookmark list");
  };

  return (
    <div className={classes.bookmarkCard}>
      <div className={classes.bookmarkCardTop}>
        <h4>Sura no : {numbering(bookmark.sura)}</h4>
        <h4>
          <BsBookmarkXFill onClick={handleRemoveBookmark} />
        </h4>
      </div>
      <div className={classes.bookmarkCardBody}>
        <p>{bookmark.ar}</p>
        <p className={classes.bn}>{bookmark.bn}</p>
        <p>{bookmark.en}</p>
      </div>
      <div className={classes.bookmarkCardBottom}>
        <p>
          Bookmarked from sura - {bookmark.arName} / {bookmark.bnName} /
          {bookmark.enName} - Ayat no : {numbering(bookmark.ayat)}
        </p>
        <Link to={`/view/${bookmark.sura}`}>Read full sura</Link>
      </div>
    </div>
  );
};

export default BookmarkCard;
