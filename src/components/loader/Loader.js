import React from "react";
import Load from "react-loader-spinner";
import styles from "../../pages/module/LoaderPageStyled.module.css";

const Loader = () => {
 return (
  <div className={styles.loader}>
   <Load
    type="Circles"
    color="#05a8df"
    height={100}
    width={100}
    timeout={1000}
   />
  </div>
 );
};

export default Loader;
