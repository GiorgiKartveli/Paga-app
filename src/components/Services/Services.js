import React from "react";
import Carousel from "../CarouselSlider/Carousel";
import DiscoverSvgShape from "../SvgFiles/DiscoverSvgShape/Discover";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.text}>
          <div className={classes.title}>Services</div>
          Fusce ipsum odio, eleifend non massa cursus,
          <br /> luctus dapibus dui. Ut ac venenatis ex, vel
          <br /> bibendum felis. Pellentesque sollicitudin nec
          <br /> mi a viverra.
        </div>
        <div className={classes.discoverShape}>
          <DiscoverSvgShape />
        </div>
      </div>
      <div className={classes.carousel}>
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
