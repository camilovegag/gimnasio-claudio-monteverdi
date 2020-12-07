import React from "react";
import styles from "./index.module.css";

const FlipCard = (props) => {
  return (
    <div className={`${styles["flip-card"]} ${styles[props.area]}`}>
      <div className={styles["flip-card-inner"]}>
        <div className={`${styles["flip-card-front"]} ${styles[props.bg]}`}>
          <h4>{props.value}</h4>
        </div>
        <div className={`${styles["flip-card-back"]} ${styles[props.bg]}`}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
