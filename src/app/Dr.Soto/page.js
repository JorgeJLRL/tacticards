import styles from "../ui/imgBgUser.module.css";
import Mensaje from "./contact.client";
import React from "react";
import Red from "./red";

export default function User() {
  const fotoperfil = "/images/DrSotoFotoPerfil.png";
  const fotoFondo = "/images/DrSotoPortada.png";
  const name = "Dr. Carlos Soto";
  const puesto = "Cirujano Traumatólogo/Ortopedista";
  const empresa = "";
  const whatsapp = "6672237783";
  const correo = "dr.sototyo@gmail.com";
  const sitioweb = "";
  const ubicacion = "Hospital San José (Consultorio 317). Blvd. Sosa Chávez 302, Juárez, 85870, Navojoa, Son.";
  const telefonofijo = "6424221026 ext. 326";
  const namecontact = "Carlos Soto%";

  const formatPhone = (phone) => {
    if (!phone) return "";
    const phoneArray = phone.split("");
    phoneArray.unshift("(");
    phoneArray.splice(4, 0, ")");
    phoneArray.splice(5, 0, " ");
    phoneArray.splice(9, 0, " ");
    return phoneArray.join("");
  };

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img src={fotoFondo} className={styles.imageBackground} />
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
              {formatPhone(whatsapp)}
            </a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/Correo.png" />
            <a className={styles.anchorText}>{correo}</a>
          </li>

          {sitioweb ? (
            <li className={styles.listContact}>
              <img className={styles.firstsection} src="/images/iconodesitioweb.png" />
              <a href="https://igas.mx/" className={styles.anchorText}>
                {sitioweb}
              </a>
            </li>
          ) : null}

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/ubicacion.png" />
            <a className={styles.anchorText}>{ubicacion}</a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/telefonofijo.png" />
            <a className={styles.anchorText} href={`tel:+${telefonofijo}`}>
              {formatPhone(telefonofijo)}
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
