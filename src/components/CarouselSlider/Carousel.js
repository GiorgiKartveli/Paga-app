import React from "react";
import classes from "./Carousel.module.css";

import Slider1 from "../SvgFiles/SliderShapes/Slider1";
import Slider2 from "../SvgFiles/SliderShapes/Slider2";
import Slider3 from "../SvgFiles/SliderShapes/Slider3";
import Slider4 from "../SvgFiles/SliderShapes/Slider4";

const Carousel = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.slider}>
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
      </div>
      <div className={classes.slider}>
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
      </div>
    </div>
  );
};

export default Carousel;
