import React from "react";
import styles from "./index.module.css";

const TextTemplate = (props) => {
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.paragraph}>{props.firstParagraph}</p>
      <p className={styles.paragraph}>{props.secondParagraph}</p>
    </div>
  );
};
export default TextTemplate;
