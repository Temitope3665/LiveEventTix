import React, { Suspense, useEffect } from "react";
import PageLoader from "../../components/pageLoader";
import { Route, Routes } from "react-router-dom";
import { HOME_URL } from "../paths";

const Home = React.lazy(() => import("../../pages"));

const WebRoute = () => {
  useEffect(() => {
    document.title = "Live Event Tix";
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default WebRoute;
