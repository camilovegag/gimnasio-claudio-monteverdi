import React from "react";
import styles from "./index.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Slide = (props) => {
  return (
    <div className={`${styles["slide"]} ${styles[props.background]}`}>
      <h2>En el Gimnasio Claudio Monteverdi...</h2>
      <h3 className={`${styles[props.h3Color]}`}>{props.h3}</h3>
      <p>{props.p}</p>
      <Link to={props.link}>
        <Button className={`${styles["button"]} ${styles[props.buttonColor]}`}>{props.button}</Button>
      </Link>
    </div>
  );
};

export default Slide;
