import styles from "../../ui/RedUI.module.css";
import ButtonTacticas from "../../ui/button/button.module.css";
import Mensaje from "../../GrupoImagenSoft/TrackitAgro/contactTrackitAgro.client";
import React from "react";
import Red from "../../GrupoImagenSoft/TrackitAgro/redTrackitAgro";

export default function User() {
  const fotoperfil = "/images/trackitLogo.jpg";
  const name = "TrackitAgro México";
  const puesto = "";
  const empresa = "";
  const whatsapp = "6681550789";
  const correo = "ventas@trackitagro.mx";
  const sitioweb = "trackitagro.mx";
  const ubicacion = "Vicente Guerrero #1089, Jiquilpan, Los Mochis, Sin.";
  const telefonofijo = "6688162171";
  const namecontact = "TrackitAgro%";

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img
          src={"/images/portadaTrackit.jpg"}
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
              (668) 155 0789
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
              (668) 816 21 71
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <Red></Red>
      </div>
    </div>
  );
}
