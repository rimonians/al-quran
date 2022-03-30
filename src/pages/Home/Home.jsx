import React, { useEffect } from "react";
import classes from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import SuraContainer from "../../components/SuraContainer/SuraContainer";
import scrollTop from "../../utils/scrollTop";

const Home = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className={classes.wrapper}>
      <Heading>সূরার তালিকা</Heading>
      <SuraContainer />
    </div>
  );
};

export default Home;
