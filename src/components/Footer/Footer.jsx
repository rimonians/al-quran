import React from "react";
import classes from "./Footer.module.css";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import numbering from "../../utils/numbering";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        কপিরাইট <FaRegCopyright /> <Link to="/">আল কোরান</Link>{" "}
        {numbering(2021)}-{numbering(new Date().getFullYear())}
      </p>
    </div>
  );
};

export default Footer;
