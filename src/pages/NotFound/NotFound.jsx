import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <p>আপনার অনুরোধকৃত পেইজটি পাওয়া যায়নি</p>
    </div>
  );
};

export default NotFound;
