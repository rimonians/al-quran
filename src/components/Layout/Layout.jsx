import React from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.main}>{children}</div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Layout;
