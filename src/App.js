import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import View from "./pages/View/View";
import Bookmark from "./pages/Bookmark/Bookmark";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { fetchSura } from "./redux/sura/suraActions";
import { fetchAyats } from "./redux/ayats/ayatsActions";
import { getLocalStorageBookmark } from "./redux/bookmark/bookmarkActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSura());
    dispatch(fetchAyats());
    dispatch(getLocalStorageBookmark());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
