import React from "react";
import TextTemplate from "../TextTemplate";
import styles from "./index.module.css";

const History = () => {
  return (
    <section className={styles["history"]}>
      <div className={styles["history-text"]}>
        <TextTemplate
          title="Nuestra historia"
          firstParagraph='Este sueño inició en el año 2002 bajo el nombre de "El taller de los artistas". Empezamos nuestro proceso de creación y legalización, obteniendo en 2008 la aprobación para pre-escolar bajo el nombre Gimnasio Claudio Monteverdi.'
          secondParagraph="Cinco años despues añadimos la educación básica primaria a nuestra institución, buscando la formación integral de los niños en un ambiente de buen trato, calidad humana y reconocimiento de suscualidades individuales."
        />
      </div>
      <div className={styles["history-color"]}></div>
    </section>
  );
};

export default History;
