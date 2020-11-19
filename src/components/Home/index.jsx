import React from "react";
import styles from "./index.module.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Slide from "./Slide";
import Testimony from "./Testimony";

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
      <section className={styles["testimonials"]}>
        <h2>Testimonios</h2>
        <Carousel autoplay className={styles["testimonials-carousel"]}>
          <Testimony
            quote='"Nosotros veníamos de un modelo homeschool, y llegamos al Monteverdi. Nos gustó la calidad humana, el buen trato de todos los  integrantes de la institución, veo a los niños tranquilos y alegres,  y eso nos hace sentir que estamos en el mejor lugar."'
            family="Familia Castro Méndez"
          />
          <Testimony quote='"Resalto el proceso de inclusión, el cariño, la metodología y el trabajo con niños que tiene capacidades diversas."' family="Familia Rodríguez Gaitán" />
          <Testimony
            quote='"Me gusta mucho el trabajo enfocado en el desarrollo de las inteligencias múltiples. Los niños no están encasillados pues reconocen sus habilidades propias y particulares. La tranquilidad de saber que están en un lugar donde está feliz y bien cuidado."'
            family="Familia Vásquez Marín"
          />
          <Testimony
            quote='"Se rescata la calidez humana, el acompañamiento de las docentes para que cada estudiante logre aprender. La utilización de diferentes estrategias para que aprendan de manera significativa, estimula la creatividad y fortalece los talentos de los niños"'
            family="Familia Barrera Peñaranda"
          />
          <Testimony
            quote='"Estamos contentos y satisfechos porque el colegio ha sabido responder muy bien a los cambios que ha exigido la pandemia, tiene bases sólidas y muy claras."'
            family="Familia Rodríguez Sarmiento"
          />
        </Carousel>
      </section>
    </main>
  );
};

export default Home;
