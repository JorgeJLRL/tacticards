import styles from "../../Ricman/imgBgUser.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../AlexisParedes/contact.client";
import React from "react";
import Red from "../AlexisParedes/red";

export default function User() {
  const fotoperfil = "/images/DespachoParedes/AlexisParedes.png";
  const fotoFondo = "/images/DespachoParedes/PortalDespacho.png";
  const name = "Alexis Paredes";
  const puesto = "Abogado Penalista";
  const empresa = "Despacho Jurídico Paredes y Asociados";
  const whatsapp = "3111398269";
  const correo = "juridicos_paredes2@hotmail.com";
  const ubicacion = "Diamante #149 col valle de matatipac Cp 63195, Tepic, Nayarit.";
  const telefonofijo = "3111398269";
  const namecontact = "Alexis Paredes%";

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
