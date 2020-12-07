import React from "react";
import TextTemplate from "../TextTemplate";
import FlipCard from "../Card";
import styles from "./index.module.css";

const History = () => {
  return (
    <section className={styles["values"]}>
      <TextTemplate title="Nuestros valores" />
      <div className={styles["values-container"]}>
        <FlipCard value="Amor" text="Fuerza que nos impulsa a hacer las cosas bien." bg="love" area="love-area" />
        <FlipCard value="Honestidad" text="Actuar y hablar con la verdad, no apropiarse de lo ajeno." bg="honestity" area="honestity-area" />
        <FlipCard value="Responsabilidad" text="Ser consciente de las desiciones, aceptar las consecuencias." bg="responsability" area="responsability-area" />
        <FlipCard value="Empatía" text="Ponerse en el lugar del otro, entender sus sentimientos." bg="empathy" area="empathy-area" />
        <FlipCard value="Puntualidad" text="Llegar a tiempo a donde tengamos que ir." bg="punctuality" area="punctuality-area" />
        <FlipCard value="Solidaridad" text="Es la colaboración mutua entre las personas." bg="solidarity" area="solidarity-area" />
        <FlipCard value="Respeto" text="Es el buen trato hacia las personas que nos rodean." bg="respect" area="respect-area" />
      </div>
    </section>
  );
};

export default History;
