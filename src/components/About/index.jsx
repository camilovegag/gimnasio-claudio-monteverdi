import React from "react";
import TextTemplate from "./TextTemplate";
import FlipCard from "./Card";
import History from "./History";
import MissionAndVision from "./MissionAndVision";
import Values from "./Values";
import styles from "./index.module.css";

const About = () => {
  return (
    <main className={styles["about-us"]}>
      <History />
      <MissionAndVision />
      <Values />
      <section className={styles["claudio-monteverdi"]}>
        <TextTemplate
          title="¿Quién fue Claudio Monteverdi?"
          firstParagraph="En el Gimnasio Claudio Monteverdi, nos proyectamos como un colegio innovador, que trabaja para descubrir y fortalecer los talentos propios de cada uno de sus estudiantes.  En 2025, seremos reconocidos por haber consolidado una propuesta pedagógica que se adapta a las diferentes necesidades y características de los estudiantes y sus familias."
        />
      </section>
    </main>
  );
};

export default About;
