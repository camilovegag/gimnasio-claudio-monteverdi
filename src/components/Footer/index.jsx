import React from "react";
import styles from "./index.module.css";
import { MailOutlined, PhoneOutlined, PushpinOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
  const privacy = "https://firebasestorage.googleapis.com/v0/b/claudio-monteverdi.appspot.com/o/docs%2FPolitica%20de%20Privacidad.pdf?alt=media&token=4acdee36-1297-4e74-bfc8-d0dfd39ea9aa";
  const facebook = "https://www.facebook.com/Gimnasio-Claudio-Monteverdi-651313651594045/";
  const instagram = "https://www.instagram.com/gcmonteverdi/";
  const youtube = "https://www.youtube.com/channel/UC0yPJlGKEnBEitv0yZIMtIg";
  return (
    <footer>
      <div className={styles["info"]}>
        <p>¿Cómo nos puedes contactar?</p>
        <div className={styles["email"]}>
          <MailOutlined />
          <p>direccion@gimnasioclaudiomonteverdi.com</p>
        </div>
        <div className={styles["phone"]}>
          <PhoneOutlined />
          <p>+(57) 312 479 8889</p>
        </div>
        <div className={styles["address"]}>
          <PushpinOutlined />
          <p>Calle 2 Sur # 5-25, Sopó, Colombia.</p>
        </div>
      </div>
      <div className={styles["social-media"]}>
        <p>Síguenos en nuestras redes sociales</p>
        <div className={styles["facebook"]}>
          <FacebookOutlined />
          <p onClick={() => window.open(facebook)}>Facebook</p>
        </div>
        <div className={styles["instagram"]}>
          <InstagramOutlined />
          <p onClick={() => window.open(instagram)}>Instagram</p>
        </div>
        <div className={styles["youtube"]}>
          <YoutubeOutlined />
          <p onClick={() => window.open(youtube)}>Youtube</p>
        </div>
      </div>
      <div className={styles["docs"]}>
        <p>Documentación</p>
        <div className={styles["privacy-policy"]}>
          <p onClick={() => window.open(privacy)}>Políticas de privacidad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
