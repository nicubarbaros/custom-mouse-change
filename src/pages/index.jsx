import React from "react";
import "../styles/home.scss";
import Header from "../components/Header";
import Slider from "../components/Slider";
import CustomCursor from "../components/CustomCursor";
import HomeTitle from "../components/HomeTitle";
import CustomCursorManager from "../components/CustomCursor/context/manager";

export default () => {
  return (
    <CustomCursorManager>
      <div className="page-wrapper">
        <CustomCursor />
        <Header />
        <HomeTitle />
        <Slider />
      </div>
    </CustomCursorManager>
  );
};
