import React from "react";
import classes from "./ViewCard.module.css";
import { motion } from "framer-motion";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addBookmark } from "../../redux/bookmark/bookmarkActions";
import numbering from "../../utils/numbering";
import { toast } from "react-toastify";

const ViewCard = ({ verse, info }) => {
  const dispatch = useDispatch();

  const bookmarkPayload = {
    sura: info.id,
    arName: info.name,
    bnName: info.translation,
    enName: info.transliteration,
    ayat: verse.id,
    ar: verse.ar,
    bn: verse.bn,
    en: verse.en,
  };

  const handleAddBookmark = () => {
    dispatch(addBookmark(bookmarkPayload));
    toast.success("সফলভাবে বুকমার্ক করা হয়েছে");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.viewCard}
    >
      <div className={classes.viewCardTop}>
        <h4>{numbering(verse.id)}</h4>
        <BsFillJournalBookmarkFill
          className={classes.bookmark}
          onClick={handleAddBookmark}
        />
      </div>
      <div className={classes.viewCardBody}>
        <p className={classes.ar}>{verse.ar}</p>
        <p className={classes.bn}>{verse.bn}</p>
        <p className={classes.en}>{verse.en}</p>
      </div>
    </motion.div>
  );
};

export default ViewCard;
