import React from "react";
import styles from "./index.module.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Slide from "./Slide";

const Home = () => {
  return (
    <main>
      <section>
        <Carousel autoplay>
          <Slide background="yellow" h3="Educamos con amor" h3Color="red-h3" p="Contribuyendo con la construcción de un mundo mejor." button="Contáctanos" buttonColor="red-button" />
          <Slide
            background="green"
            h3="Reconocemos las múltiples inteligencias"
            h3Color="blue-h3"
            p="Permitiendo a los niños ser ellos mismos y desarrollar sus talentos."
            button="Leer más"
            buttonColor="blue-button"
            link="/projects"
          />
          <Slide
            background="blue"
            h3="Hacemos equipo con los papás"
            h3Color="dark-h3"
            p="Porque juntos velamos por la formación integral de nuestros niños."
            button="¿Quiénes somos?"
            buttonColor="dark-button"
            link="/about"
          />
        </Carousel>
      </section>
      <section className={styles["schedule"]}>
        <h2>Matrículas abiertas</h2>
        <h3>Calendario A</h3>
        <p>Iniciamos clases en febrero y terminamos en noviembre.</p>
        <h3>Preescolar y básica primaria</h3>
        <p>Pre jardín, jardín y transición. Básica primaria de primero a quinto año. </p>
        <h3>Modalidad de alternancia</h3>
        <p>Combinamos presencialidad con aprendizaje remoto, cumpliendo protocolos de bioseguridad.</p>
      </section>
      <section></section>
    </main>
  );
};

export default Home;
