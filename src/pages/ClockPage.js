import React from "react";
import Clock from "../components/clock/Clock";
import styles from './module/ClockPageStyled.module.css';
const ClockPage = () => {
    return (
     <div className={styles.containerClockPage}>
      <Clock />
     </div>
    );
};

export default ClockPage;
