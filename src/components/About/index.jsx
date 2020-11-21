import React from "react";
import TextTemplate from "./TextTemplate";
import FlipCard from "./Card";
import History from "./History";
import styles from "./index.module.css";

const About = () => {
  return (
    <main className={styles["about-us"]}>
      <History />
      <section className={styles["mission-and-vision"]}>
        <div className={styles["mission-and-vision-text"]}>
          <TextTemplate
            title="Nuestra misión y visión"
            firstParagraph="Somos una comunidad educadora, con una proyección humanística basada en el respeto por la individualidad y las múltiples inteligencias, fundamentados en la pedagogía del buen trato mediante la cual pretendemos hacer felices a los niños de hoy para contar en el futuro con adultos emocionalmente fuertes, capaces de descubrir su propósito de vida."
            secondParagraph="En el Gimnasio Claudio Monteverdi, nos proyectamos como un colegio innovador, que trabaja para descubrir y fortalecer los talentos propios de cada uno de sus estudiantes.  En 2025, seremos reconocidos por haber consolidado una propuesta pedagógica que se adapta a las diferentes necesidades y características de los estudiantes y sus familias."
          />
        </div>
        <div className={styles["mission-and-vision-color"]}></div>
      </section>
      <section className={styles["values"]}>
        <TextTemplate title="Nuestros valores" />
        <FlipCard />
      </section>
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
