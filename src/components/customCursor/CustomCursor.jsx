import React from "react";
import { useContext } from "react"; 
import useMousePosition from "../hooks/UseMousePosition";
import { MouseContext } from "../../context/MouseContext";

import './customCursor.scss'

const CustomCursor = () => {
    const { cursorType } = useContext(MouseContext); 
    const { x, y } = useMousePosition();

  return (
    <div class="cursor">
      <div
        className={`ring ${cursorType}`} 
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
};
export default CustomCursor;