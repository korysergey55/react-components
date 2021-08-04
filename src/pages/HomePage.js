import { Component } from "react";
import styles from "./module/HomePageStyled.module.css";

import HomeDeteilsPage from "./HomeDeteilsPage";

class HomePage extends Component {
 state = {};

 render() {
  return (
   <>
    <div className={styles.homePageContainer}>
     <h2 className={styles.title}>Find Соuntry for journey</h2>
     <HomeDeteilsPage />
    </div>
   </>
  );
 }
}

export default HomePage;
