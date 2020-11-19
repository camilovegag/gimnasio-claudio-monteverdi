import React from "react";
import styles from "./index.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Slide = (props) => {
  // const figures = "https://firebasestorage.googleapis.com/v0/b/claudio-monteverdi.appspot.com/o/figuras%2Ffigures.svg?alt=media&token=ace849b4-43bb-4a81-b6c7-e88439242a63";
  return (
    <div className={`${styles["slide"]} ${styles[props.background]}`}>
      <h2>En el Gimnasio Claudio Monteverdi...</h2>
      <h3 className={`${styles[props.h3Color]}`}>{props.h3}</h3>
      <p>{props.p}</p>
      <Link to={props.link}>
        <Button className={`${styles["button"]} ${styles[props.buttonColor]}`}>{props.button}</Button>
      </Link>
      {/* <img className={styles["figures"]} src={figures} alt="" /> */}
    </div>
  );
};

export default Slide;
