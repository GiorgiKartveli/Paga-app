import React from "react";
import work2 from "../../../assets/WorkImages/WorkImg2.jpg";
import classes from "./WorkImg2.module.css";

const WorkImg2 = () => {
  return (
    <div className={classes.workImg}>
      <img src={work2} alt="work" />
    </div>
  );
};

export default WorkImg2;
