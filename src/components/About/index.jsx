import React from "react";
import TextTemplate from "./TextTemplate";
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
          firstParagraph="Claudio Monteverdi, músico y compositor Italiano del siglo XVI revolucionó la concepción del arte musical con el surgimiento de la ópera. Representa innovación, su movimiento artístico nos inspira a explorar en la musica, danza, arte plastico, canto e interpretación instrumental."
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/claudio-monteverdi.appspot.com/o/imagenes%2FClaudio%20Monteverdi.png?alt=media&token=fb998a77-6151-49c9-81ca-7771b39827bc"
          alt="Ilustración de Claudio Monteverdi"
        />
      </section>
    </main>
  );
};

export default About;
