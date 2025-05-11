import styles from "../../Ricman/imgBgUser.module.css";
import ButtonTacticas from "../../ui/button/button.js";
import Mensaje from "../ElenaBonilla/contact.client.js";
import React from "react";
import Red from "../ElenaBonilla/red.js";

export default function User() {
  const fotoperfil = "/images/DespachoParedes/ElenaBonilla.png";
  const fotoFondo = "/images/DespachoParedes/PortalDespacho.png";
  const name = "Elena Bonilla";
  const puesto = "Abogado Penalista";
  const empresa = "Despacho Jurídico Paredes y Asociados";
  const whatsapp = "3117406182";
  const correo = "juridicos_bonilla@hotmail.com";
  const ubicacion = "Diamante #149 col valle de matatipac Cp 63195, Tepic, Nayarit.";
  const telefonofijo = "3117406182";
  const namecontact = "Elena Bonilla%";

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
