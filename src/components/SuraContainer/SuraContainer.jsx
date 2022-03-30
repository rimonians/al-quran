import React from "react";
import classes from "./SuraContainer.module.css";
import Search from "../Search/Search";
import SuraCard from "../SuraCard/SuraCard";
import { useSelector } from "react-redux";
import { AnimateSharedLayout, motion } from "framer-motion";

const SuraContainer = () => {
  const suraState = useSelector((state) => state.sura);
  const { loading, filtered: sura, err } = suraState;

  return (
    <>
      {!loading && !err && <Search />}
      <AnimateSharedLayout>
        <motion.div layout className={classes.suraContainer}>
          {loading && <p>লোড হচ্ছে...</p>}
          {err && <p>{err}</p>}
          {!loading &&
            !err &&
            sura.map((item) => <SuraCard key={item.id} sura={item} />)}
        </motion.div>
      </AnimateSharedLayout>
    </>
  );
};

export default SuraContainer;
