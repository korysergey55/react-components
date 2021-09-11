import React from "react";
import Loader from "../components/loader/Loader";
import steles from "./module/LoaderPageStyled.module.css";
import Geoposition from '../components/geoposition/Geoposition';
const LoaderPage = () => {
 return (
  <div className={steles.containerLoaderPage}>
     <Loader />
     <Geoposition />
  </div>
 );
};

export default LoaderPage;
