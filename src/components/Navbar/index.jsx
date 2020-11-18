import React from "react";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src="https://firebasestorage.googleapis.com/v0/b/claudio-monteverdi.appspot.com/o/logos%2Flogo.svg?alt=media&token=6a6abe39-bb52-45c9-a65a-49d6b953af9b" alt="" />
        <h1>
          Gimnasio <br /> Claudio <br /> Monteverdi
        </h1>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>¿Quiénes somos?</li>
          <li>Proyectos</li>
          <li>Homeschool</li>
          <li>Contácto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
