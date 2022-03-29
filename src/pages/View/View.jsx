import React from "react";
import classes from "./View.module.css";
import ViewContainer from "../../components/ViewContainer/ViewContainer";

const View = () => {
  return (
    <div className={classes.wrapper}>
      <ViewContainer />
    </div>
  );
};

export default View;
