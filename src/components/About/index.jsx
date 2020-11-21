import React from "react";
import FlipCard from "./Card";
import styles from "./index.module.css";

const About = () => {
  return (
    <main>
      <section className={styles["history"]}>
        <TextTemplate
          title=">Nuestra historia"
          firstParagraph="Este sueño inició en el año 2002 bajo el nombre de ”El taller de los artistas”. Empezamos nuestro proceso de creación y legalización, obteniendo en 2008 la aprobación para pre-escolar bajo elnombre Gimnasio Claudio Monteverdi."
          secondParagraph="Cinco años despues añadimos la educación básica primaria a nuestra institución, buscando la formación integral de los niños en un ambiente de buen trato, calidad humana y reconocimiento de suscualidades individuales."
        />
      </section>
      <section className={styles["mission-and-vision"]}>
        <TextTemplate
          title=">Nuestra misión y visión"
          firstParagraph="Somos una comunidad educadora, con una proyección humanística basada en el respeto por la individualidad y las múltiples inteligencias, fundamentados en la pedagogía del buen trato mediante la cual pretendemos hacer felices a los niños de hoy para contar en el futuro con adultos emocionalmente fuertes, capaces de descubrir su propósito de vida."
          secondParagraph="En el Gimnasio Claudio Monteverdi, nos proyectamos como un colegio innovador, que trabaja para descubrir y fortalecer los talentos propios de cada uno de sus estudiantes.  En 2025, seremos reconocidos por haber consolidado una propuesta pedagógica que se adapta a las diferentes necesidades y características de los estudiantes y sus familias."
        />
      </section>
      <section className={styles["values"]}>
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

const TextTemplate = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.firstParagraph}</p>
      <p>{props.secondParagraph}</p>
    </div>
  );
};
export default About;
