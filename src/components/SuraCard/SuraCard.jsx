import React from "react";
import classes from "./SuraCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import numbering from "../../utils/numbering";

const SuraCard = ({ sura }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.suraCard}
    >
      <div className={classes.suraCardTop}>
        <h4>{numbering(sura.id)}</h4>
        <p>Total verses : {numbering(sura.total_verses)}</p>
      </div>
      <div className={classes.suraCardBody}>
        <p>{sura.name}</p>
        <p>{sura.transliteration}</p>
        <p>{sura.translation}</p>
      </div>
      <div className={classes.suraCardBottom}>
        <p>{sura.type}</p>
        <Link to={`/view/${sura.id}`}>View</Link>
      </div>
    </motion.div>
  );
};

export default SuraCard;