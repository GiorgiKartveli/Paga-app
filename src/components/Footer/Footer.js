import React from "react";
import classes from "./Footer.module.css";
import WhiteFrame from "../SvgFiles/WhiteFrame/WhiteFrame";

import InstagramIcon from "../SvgFiles/InstagramIcon/InstagramIcon";
import FacebookIcon from "../SvgFiles/FacebookIcon/FacebookIcon";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.paga}>
        <WhiteFrame />
      </div>
      <div className={classes.parent}>
        <div className={classes.info}>
          <div className={classes.span}></div>
          <div>
            2425 E Camelback Rd
            <br /> Suite 150, Phoenix, AZ 85016
          </div>
          <div>info@paga.com</div>
        </div>

        <div className={classes.mediaQueryDiv}>
          <div className={classes.menu}>
            <div className={classes.span}>Menu</div>

            <div>About</div>
            <div>Selected Works</div>
            <div>Contact</div>
          </div>

          <div className={classes.social}>
            <div className={classes.span}>Follow us</div>
            <div className={classes.icons}>
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
