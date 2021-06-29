import React from "react";
import sprite from "../../icons/sprite.svg";
import { ButtonStyled } from "./ButtonSVGStyled";

const ButtonSVG = () => {
 return (
  <ButtonStyled className="Button">
   Load More
   <svg className="headerIcon">
    <use href={sprite + "#icon-airplane"} />
   </svg>
  </ButtonStyled>
 );
};

export default ButtonSVG;
