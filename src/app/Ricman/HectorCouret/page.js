import styles from "../../Ricman/imgBgUser.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../HectorCouret/contact.client.js";
import React from "react";
import Red from "../../Ricman/HectorCouret/red.js";

export default function User() {
  const fotoperfil = "/images/Ricman/Hector.png";
  const fotoFondo = "/images/Ricman/RicmanFondo.png";
  const name = "HECTOR RAFAEL COURET MEZA";
  const puesto = "ASESOR DE SERVICIO";
  const empresa = "RICMAN MULTISERVICIOS";
  const whatsapp = "6688829909";
  const correo = "ricmanmultiservicios@gmail.com";
  const ubicacion = "Blvd. 10 de Mayo 220 Pte. Fracc. Las Fuentes, 81223, Los Mochis, Sinaloa";
  const telefonofijo = "6688829909";
  const namecontact = "HECTOR RAFAEL COURET MEZA%";

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img
          src={fotoFondo}
          className={styles.imageBackground}
        />
      </div>
      <img src={fotoperfil} className={styles.userImgBB} />

      <div className={styles.contentBox}>
        <div className="flex justify-normal items-center flex-col">
          <strong>
            <h2>{name}</h2>
          </strong>
          <p>{puesto}</p>
          <p>{empresa}</p>
        </div>

        <ul className={styles.unorderedList}>
          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/Telefonowa.png" />
            <a
              className={styles.anchorText}
              href={`tel:+${whatsapp}
                    &amp;name=${namecontact}`}
            >
              {whatsapp}
            </a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/Correo.png" />
            <a className={styles.anchorText}>{correo}</a>
          </li>

      

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/ubicacion.png" />
            <a className={styles.anchorText}>{ubicacion}</a>
          </li>

          <li className={styles.listContact}>
            <img
              className={styles.firstsection}
              src="/images/telefonofijo.png"
            />
            <a className={styles.anchorText} href={`tel:+${telefonofijo}`}>
            {telefonofijo}
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
