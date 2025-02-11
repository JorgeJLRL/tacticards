import styles from "./GrupoImageSoft.module.css";
export default function GrupoImagenSoft() {
  return (
    <div className={styles.flexBoxGIS}>
      <div className={styles.ImageBoxFlex}>
        <div className={styles.imageBox3}>
          <img
            className={styles.imgResponsive1}
            src="/images/trackitagro-logo.png"
          ></img>
          <button className={styles.btnVerInfo}>
            <a href="https://www.tacticards.com.mx/GrupoImagenSoft/Ubisat/">
              Ver Información
            </a>
          </button>
        </div>
        <div className={styles.imageBox2}>
          <img
            className={styles.imgResponsive}
            src="/images/Ubisat-logo.png"
          ></img>
          <button className={styles.btnVerInfo}>
            <a href="https://www.tacticards.com.mx/GrupoImagenSoft/Ubisat/">
              Ver Información
            </a>
          </button>
        </div>

        <div className={styles.imageBox1}>
          <img
            className={styles.imgResponsive}
            src="/images/iGAS-logo.png"
          ></img>
          <div className={styles.btninfoBox}>
            <button className={styles.btnVerInfo}>
              <a href="https://www.tacticards.com.mx/GrupoImagenSoft/iGAS/">
                Ver Información
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
