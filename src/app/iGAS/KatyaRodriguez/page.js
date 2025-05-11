import styles from "../../ui/imgBgUser.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../KatyaRodriguez/contact.client.js";
import React from "react";
import Red from "../KatyaRodriguez/red.js";

export default function User() {
  const fotoperfil = "/images/igas/Katya.webp";
  const fotoFondo = "/images/igas/Portada-iGAS-1_Mesa-de-trabajo-1-01.webp";
  const name = "Lic. Katya Rodríguez";
  const puesto = "Asesor Comercial";
  const empresa = "iGAS";
  const whatsapp = "6681240065";
  const correo = "krodriguez@igas.com.mx";
  const sitioweb = "https://igas.mx/";
  const ubicacion = "Libertad 479 Norte Col Jiquilpan C.P. 81229";
  const telefonofijo = "6688162160";
  const namecontact = "Katya Rodríguez%";

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
            <a href={sitioweb} className={styles.anchorText}>
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
