import React from "react";
import classes from "./ViewInfo.module.css";
import { motion } from "framer-motion";
import numbering from "../../utils/numbering";

const ViewInfo = ({ info }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.viewInfo}
    >
      <div className={classes.viewInfoTop}>
        <h3>{info.name}</h3>
        <h4>{info.translation}</h4>
        <h3>{info.transliteration}</h3>
      </div>
      <div className={classes.viewInfoBottom}>
        <p>Sura No : {numbering(info.id)}</p>
        <p>Total Ayats : {numbering(info.total_verses)}</p>
        <p>{info.type}</p>
      </div>
    </motion.div>
  );
};

export default ViewInfo;
