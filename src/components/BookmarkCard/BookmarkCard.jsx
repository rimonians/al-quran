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
    toast.error("সফলভাবে বুকমার্ক থেকে সড়ানো হয়েছে");
  };

  return (
    <div className={classes.bookmarkCard}>
      <div className={classes.bookmarkCardTop}>
        <h4>সূরা নং : {numbering(bookmark.sura)}</h4>
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
          {bookmark.arName} / {bookmark.bnName} /
          {bookmark.enName} - থেকে বুকমার্ক করা হয়েছে - আয়াত নং : {numbering(bookmark.ayat)}
        </p>
        <Link to={`/view/${bookmark.sura}`}>সম্পূর্ন সূরা পড়ুন</Link>
      </div>
    </div>
  );
};

export default BookmarkCard;
