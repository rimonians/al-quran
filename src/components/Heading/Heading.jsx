import React from "react";
import classes from "./Heading.module.css";

const Heading = ({ children }) => {
  return (
    <div className={classes.heading}>
      <h3>{children}</h3>
    </div>
  );
};

export default Heading;
