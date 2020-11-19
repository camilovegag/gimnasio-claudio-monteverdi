import React from "react";
import styles from "./index.module.css";

const Testimony = (props) => {
  return (
    <div className={styles["testimony"]}>
      <p className={styles["quote"]}>{props.quote}</p>
      <p className={styles["family"]}>{props.family}</p>
    </div>
  );
};

export default Testimony;
