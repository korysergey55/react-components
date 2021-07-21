import React from "react";
import ButtonSVG from "../components/buttonSVG/ButtonSVG";
import styles from "./module/ButtonSVGPageStyled.module.css";

const ButtonSVGPage = () => {
    return (
     <div className={styles.containerButtonSVGPage}>
      <ButtonSVG />
     </div>
    );
};

export default ButtonSVGPage;
