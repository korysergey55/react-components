import React from "react";
import Loader from "../components/loader/Loader";
import steles from "./module/LoaderPageStyled.module.css";
const LoaderPage = () => {
 return (
  <div className={steles.containerLoaderPage}>
   <Loader />
  </div>
 );
};

export default LoaderPage;
