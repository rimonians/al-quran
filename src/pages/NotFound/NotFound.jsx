import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <p>Sorry your requested page wasn't found</p>
    </div>
  );
};

export default NotFound;
