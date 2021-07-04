import React from 'react'
import styles from './IconSVGS.module.css'
import { ReactComponent as Icon } from "../../icons/iconmac.svg";

const IconSVG = () => {

    return (
      <Icon className={styles.iconSVG}/>   
    );
}

export default IconSVG;