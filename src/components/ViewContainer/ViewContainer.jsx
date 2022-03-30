import React, { useEffect, useState } from "react";
import classes from "./ViewContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ayatsSearch } from "../../redux/ayats/ayatsActions";
import { useParams } from "react-router-dom";
import ViewInfo from "../ViewInfo/ViewInfo";
import ViewCard from "../ViewCard/ViewCard";

const ViewContainer = () => {
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState("");
  const [info, setInfo] = useState({});
  const [verses, setVerses] = useState([]);
  const ayatsState = useSelector((state) => state.ayats);
  const dispatch = useDispatch();
  const params = useParams();
  const { ayats, filtered} = ayatsState;
  const { id } = params;

  useEffect(() => {
    if(id<1 || id>114){
     setLoading(false);
     setErr("সম্ভবত আপনি সঠিক সূরা নং দেন নি");
    }else{
      if (ayats.length !== 0) {
       dispatch(ayatsSearch(id));
       setLoading(false);
       setErr("");
     }
    }
  }, [dispatch, ayats, id]);

  useEffect(() => {
    if (filtered.length !== 0) {
      const verses = filtered.map((el) => el.verses);
      const arVerses = verses[0].map((el) => el.text);
      const bnVerses = verses[1].map((el) => el.translation);
      const enVerses = verses[2].map((el) => el.translation);
      const groupVerses = [];
      arVerses.forEach((el, index) => {
        groupVerses.push({
          id: index + 1,
          ar: arVerses[index],
          bn: bnVerses[index],
          en: enVerses[index],
        });
      });

      const { id, name, translation, transliteration, total_verses, type } =
        filtered[1];
      setVerses(groupVerses);
      setInfo({ id, name, translation, transliteration, total_verses, type });
    }
  }, [filtered]);

  return (
    <>
      {Object.keys(info).length !== 0 && <ViewInfo info={info} />}
      <div className={classes.viewContainer}>
        {loading && <p>লোড হচ্ছে...</p>}
        {err && <p>{err}</p>}
        {!loading &&
          !err &&
          verses.map((verse) => (
            <ViewCard key={verse.id} verse={verse} info={info} />
          ))}
      </div>
    </>
  );
};

export default ViewContainer;
