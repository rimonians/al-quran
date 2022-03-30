import React from "react";
import classes from "./ScrollTop.module.css";
import { BsJournalArrowUp } from "react-icons/bs";
import scrollTop from "../../utils/scrollTop";

const ScrollTop = () => {
  return (
    <div className={classes.scrollTop} onClick={scrollTop}>
      <BsJournalArrowUp />
    </div>
  );
};

export default ScrollTop;
