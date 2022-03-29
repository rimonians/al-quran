import React from "react";
import classes from "./ScrollTop.module.css";
import { BsJournalArrowUp } from "react-icons/bs";

const ScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={classes.scrollTop} onClick={handleScrollTop}>
      <BsJournalArrowUp />
    </div>
  );
};

export default ScrollTop;
