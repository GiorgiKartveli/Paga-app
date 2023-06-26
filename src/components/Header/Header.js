import React from "react";
import Logo from "../SvgFiles/Logo/Logo";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <ul className={classes.ul}>
            <li>About</li>
            <li>Selected Works</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={classes.menu}>Menu</div>
      </header>
    </div>
  );
};

export default Header;
