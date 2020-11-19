import React from "react";
import styles from "./index.module.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Slide from "./Slide";

const Home = () => {
  return (
    <main>
      <section className={styles["carousel"]}>
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
      <section></section>
      <section></section>
    </main>
  );
};

export default Home;
