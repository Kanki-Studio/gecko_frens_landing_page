import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Navigation = ({ footer }) => {
  return (
    <NavLink
      to={footer.to}
      className={({ isActive }) => (isActive ? styles.nav_active : styles.nav)}
    >
      {footer.name}
    </NavLink>
  );
};

export default Navigation;
