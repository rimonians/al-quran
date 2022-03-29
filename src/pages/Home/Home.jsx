import React from "react";
import classes from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import SuraContainer from "../../components/SuraContainer/SuraContainer";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Heading>All Sura Lists</Heading>
      <SuraContainer />
    </div>
  );
};

export default Home;
