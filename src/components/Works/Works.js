import React, { useState } from "react";
import classes from "./Works.module.css";

import WorkImg1 from "../WorkSectionImages/WorkImg1/WorkImg1";
import WorkImg2 from "../WorkSectionImages/WorkImg2/WorkImg2";
import WorkImg3 from "../WorkSectionImages/WorkImg3/WorkImg3";
import WorkImg4 from "../WorkSectionImages/WorkImg4/WorkImg4";
import WorkImg5 from "../WorkSectionImages/WorkImg5/WorkImg5";

const Works = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event) => {
    setHovered(true);
    updateCursorPos(event);
  };

  const handleMouseMove = (event) => {
    updateCursorPos(event);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const updateCursorPos = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className={classes.main}>
      <div className={classes.parent}>
        <p className={classes.caption}>Selected Works</p>

        <div
          className={classes.listItem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.listItemtext}>Mauris ligula elit</div>
          <div className={classes.age}>2013</div>
          {hovered && (
            <div
              className={classes.imageOverlay}
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              <WorkImg1 />
            </div>
          )}
        </div>

        <div
          className={classes.listItem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.listItemtext}>Nullam varius</div>
          <div className={classes.age}>2015</div>
          {hovered && (
            <div
              className={classes.imageOverlay}
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              <WorkImg2 />
            </div>
          )}
        </div>

        <div
          className={classes.listItem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.listItemtext}>Nunc et turpis nec</div>
          <div className={classes.age}>2014</div>
          {hovered && (
            <div
              className={classes.imageOverlay}
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              <WorkImg3 />
            </div>
          )}
        </div>

        <div
          className={classes.listItem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.listItemtext}>Ut iaculis purus</div>
          <div className={classes.age}>2013</div>
          {hovered && (
            <div
              className={classes.imageOverlay}
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              <WorkImg4 />
            </div>
          )}
        </div>

        <div
          className={classes.listItem}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.listItemtext}>Praesent nisl nis</div>
          <div className={classes.age}> 2016</div>
          {hovered && (
            <div
              className={classes.imageOverlay}
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              <WorkImg5 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
