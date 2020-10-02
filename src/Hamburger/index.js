import React, { useContext } from "react";
import "./style.scss";
import CustomCursorContext from "../components/CustomCursor/context/CustomCursorContext";
export const Hamburger = () => {
  const { setType } = useContext(CustomCursorContext);
  return (
    <div
      className="hamburger-icon"
      onMouseEnter={() => setType("hamburger")}
      onMouseLeave={() => setType("default")}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
};
