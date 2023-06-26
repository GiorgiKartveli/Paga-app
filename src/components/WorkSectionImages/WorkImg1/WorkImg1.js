import React from "react";
import work1 from "../../../assets/WorkImages/WorkImg.jpg";
import classes from "./WorkImg1.module.css";

const WorkImg1 = () => {
  return (
    <div className={classes.workImg1}>
      <img src={work1} alt="work" />
    </div>
  );
};

export default WorkImg1;
