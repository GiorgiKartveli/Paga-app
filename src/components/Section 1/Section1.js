import React from "react";
import classes from "./Section1.module.css";

import ShapeIcon1 from "../SvgFiles/ShapeImages/ShapeImg1/ShapeImg1";
import ShapeIcon2 from "../SvgFiles/ShapeImages/ShapeImg2/ShapeImg2";
import ShapeIcon3 from "../SvgFiles/ShapeImages/ShapeImg3/ShapeImg3";
import ShapeIcon4 from "../SvgFiles/ShapeImages/ShapeImg4/ShapeImg4";
import ShapeIcon5 from "../SvgFiles/ShapeImages/ShapeImg5/ShapeImg5";

const Section1 = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.text}>
          praesent pharetra <br /> turpis nisi
        </div>
        <div className={classes.shape1}>
          <ShapeIcon1 />
        </div>
        <div className={classes.shape2}>
          <ShapeIcon2 />
        </div>
        <div className={classes.shape3}>
          <ShapeIcon3 />
        </div>
        <div className={classes.shape4}>
          <ShapeIcon4 />
        </div>
        <div className={classes.shape5}>
          <ShapeIcon5 />
        </div>
      </div>
    </div>
  );
};

export default Section1;
