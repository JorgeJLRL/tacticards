import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../../Cofta/DrGarciaMarquez/contactGM.client";
import React from "react";
import Red from "../../Cofta/DrGarciaMarquez/redGM";

export default function User() {
  const fotoperfil = "/images/JoseCGM.png";
  const name = "Dr. José Carlos García Márquez";
  const puesto = "Oftalmólogo";
  const empresa = "Centro Oftalmológico de Los Mochis";
  const whatsapp = "6682255985";
  const correo = "oftalmologia@cofta.mx";
  const sitioweb = "https://cofta.mx/";
  const ubicacion = "Av. Gabriel Leyva #198 Sur, Col. Centro, Los Mochis, Sin.";
  const telefonofijo = "6688155308";
  const namecontact = "Jose%Garcia";

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img
          src={"/images/PortadaOftalmologo.png"}
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
              (668) 225 5985
            </a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/Correo.png" />
            <a className={styles.anchorText}>{correo}</a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/sitioweb.png" />
            <a className={styles.anchorText} href={sitioweb} target="_blank">
              {sitioweb}
            </a>
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
              (668) 815 5308
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
