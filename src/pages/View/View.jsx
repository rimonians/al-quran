import React, { useEffect } from "react";
import classes from "./View.module.css";
import ViewContainer from "../../components/ViewContainer/ViewContainer";
import scrollTop from "../../utils/scrollTop";

const View = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className={classes.wrapper}>
      <ViewContainer />
    </div>
  );
};

export default View;
