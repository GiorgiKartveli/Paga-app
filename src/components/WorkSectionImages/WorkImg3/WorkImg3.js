import React from "react";
import work3 from "../../../assets/WorkImages/WorkImg3.jpg";
import classes from "./WorkImg3.module.css";

const WorkImg3 = () => {
  return (
    <div className={classes.workImg}>
      <img src={work3} alt="work" />
    </div>
  );
};

export default WorkImg3;
