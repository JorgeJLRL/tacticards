import styles from "../../ui/RedUI.module.css";
import ButtonTacticas from "../../ui/button/button.module.css";
import Mensaje from "../../Proodecs/AngelBaez/contactPRO.client";
import React from "react";
import Red from "./redPRO";

export default function User() {
  const fotoperfil = "/images/Proodecs/PerfilAngelBaez.png";
  const name = "José Ángel Báez Olivo";
  const puesto = "Gerente";
  const empresa = "PROODECS";
  const whatsapp = "6442617543";
  const correo = "abaez@proodecs.com";
  const sitioweb = "proodecs.com";
  const ubicacion = "Los Mochis, Sinaloa ";
  const telefonofijo = "6688126450";
  const namecontact = "JoseAngel%BaezOlivo";

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img
          src={"/images/Proodecs/PortadatarjetavirtualProodecs.png"}
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
            <img className={styles.firstsection} src="/images/Telefonowa.svg" />
            <a
              className={styles.anchorText}
              href={`tel:+${whatsapp}
                    &amp;name=${namecontact}`}
            >
              (644) 261 7543
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
              (668) 812 6450
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
