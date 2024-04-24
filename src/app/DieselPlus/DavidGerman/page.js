import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js"
import Mensaje from "../../DieselPlus/DavidGerman/contactDGclient.js"
import React from "react"
import Red from "../../components/dieselplusredes/DavidGerman/redDG.js"




export default function User(){

    return(
       
        <div className={styles.imagebg}>
            
                <div className={styles.imageBoxBackground}>
                    <img
                    src={"/images/PortadaDieselPlus.png"}
                    className={styles.imageBackground}
                    />
                </div>
                <img
                src={"/images/DavidGerman.png"}
                           className={styles.userImgBB}
                />
         


        <div className={styles.contentBox} >
    
                <div className="flex justify-normal items-center flex-col">
                    <strong><h2>David Germán Valdez</h2></strong>
                    <p>Agente de Ventas</p>
                    <p>DiéselPlus</p>
                </div>
    
    
                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}><img  className={styles.firstsection} src="/images/Telefonowa.png"/><a className={styles.anchorText} href="tel:+6441700021;?
                    &amp;name=David%German">(644) 170 0021</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/Correo.png"/><a className={styles.anchorText}>ventasobregon2@diesel.plus</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/sitioweb.png"/><a className={styles.anchorText} href="https://www.dieselplus.com.mx" target="_blank">www.dieselplus.com.mx</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/ubicacion.png"/><a className={styles.anchorText}>Carretera Norman E. Bourlag S/N, Campo 6, Cajeme, Sonora</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/telefonofijo.png"/><a className={styles.anchorText} href="tel:+6641430815">(664) 143 0815</a></li>
                </ul>
                 
                <Mensaje></Mensaje>
                
                <Red></Red>
        </div>

        </div>
       
    )
}