import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Navbar = () => {
  return (
    <header>
      <div className={styles["logo"]}>
        <img src="https://firebasestorage.googleapis.com/v0/b/claudio-monteverdi.appspot.com/o/logos%2Flogo.svg?alt=media&token=6a6abe39-bb52-45c9-a65a-49d6b953af9b" alt="" />
        <h1 className={styles["logo-name"]}>
          Gimnasio <br /> Claudio <br /> Monteverdi
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={styles["link"]} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="about">
              ¿Quiénes somos?
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="projects">
              Proyectos
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="homeschool">
              Homeschool
            </Link>
          </li>
          <li>
            <Link className={styles["link"]} to="">
              Contácto
            </Link>
          </li>
        </ul>
      </nav>
      <MyDrawer />
    </header>
  );
};

const MyDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={styles["drawer"]}>
      <MenuOutlined onClick={showDrawer} />
      <Drawer title="Menú de navegación" placement="left" closable={false} onClose={onClose} visible={visible}>
        <p>
          <Link to="/">Inicio</Link>
        </p>
        <p>
          <Link to="about">¿Quiénes somos?</Link>
        </p>
        <p>
          <Link to="projects">Proyectos</Link>
        </p>
        <p>
          <Link to="homeschool">Homeschool</Link>
        </p>
        <p>
          <Link to="">Contácto</Link>
        </p>
      </Drawer>
    </div>
  );
};

export default Navbar;
