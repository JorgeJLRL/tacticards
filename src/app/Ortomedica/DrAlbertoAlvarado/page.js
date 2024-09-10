import styles from "../../Ortomedica/AlbertoAlvarado.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "./contactAA.client.js";
import React from "react";
import Red from "../../Ortomedica/DrAlbertoAlvarado/redAA.js";

export default function User() {
  const fotoperfil = "/images/Ortomedica/perfilOrtomedica.png";
  const name = "Dr. Alberto Alvarado";
  const puesto = "Urgencias, luxaciones, fracturas, pie plano, esguinces, cirugía de cadera, columna, rodilla, osteoporosis y más.";
  const empresa = "Ortomédica -Traumatología y Ortopedia-";
  const whatsapp = "6681165632";
  const correo = "albertoalvarado_60@hotmail.com";
  const ubicacion = "Libertad #1032, Col. Jardines de Fátima, Los Mochis, Sin.";
  const telefonofijo = "6688188925";
  const namecontact = "Dr. Alberto% Alvarado";

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img
          src={"/images/Ortomedica/portadaOrtomedica.png"}
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
              (668) 116 5632
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
            (668) 818 8925
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
