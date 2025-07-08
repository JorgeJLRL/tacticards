import styles from "../../ui/imgBgUser.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../JannuaryPenuelas/contact.client.js";
import React from "react";
import Red from "../JannuaryPenuelas/red.js";

export default function User() {
  const fotoperfil = "/images/ubisat/Jannuary.webp";
  const fotoFondo = "/images/ubisat/Portada-Ubisat.webp";
  const name = "M. C. Jannuary Peñuelas Rivas";
  const puesto = "Gerente Comercial";
  const empresa = "UBISAT";
  const whatsapp = "6681130120";
  const correo = "jpenuelas@ubisat.com.mx";
  const sitioweb = "https://ubisat.mx/";
  const ubicacion = "Vicente Guerrero 1089 Col Jiquilpan C.P. 81220";
  const telefonofijo = "6688162165";
  const namecontact = "Jannuary Peñuelas Rivas%";

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
              {whatsapp}
            </a>
          </li>

          <li className={styles.listContact}>
            <img className={styles.firstsection} src="/images/Correo.png" />
            <a className={styles.anchorText}>{correo}</a>
          </li>

          <li className={styles.listContact}>
            <img
              className={styles.firstsection}
              src="/images/iconodesitioweb.png"
            />
            <a href="https://igas.mx/" className={styles.anchorText}>
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
