import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js"
import Mensaje from "../../DieselPlus/GamalielRodriguez/contactGR.client.js"
import React from "react"
import Red from "../../components/dieselplusredes/GamalielRedes/redG.js"




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
                src={"/images/GamalielRodriguez.png"}
                           className={styles.userImgBB}
                />
         


        <div className={styles.contentBox} >
    
                <div className="flex justify-normal items-center flex-col">
                    <strong><h2>Gamaliel Rodríguez</h2></strong>
                    <p>Agente de Ventas</p>
                    <p>DiéselPlus</p>
                </div>
    
    
                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}><img  className={styles.firstsection} src="/images/Telefonowa.png"/><a className={styles.anchorText} href="tel:+6672437043;?
                    &amp;name=Gamaliel%Rodriguez">(667) 243 7043</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/Correo.png"/><a className={styles.anchorText}>ventas5@diesel.plus</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/sitioweb.png"/><a className={styles.anchorText} href="https://www.dieselplus.com.mx" target="_blank">www.dieselplus.com.mx</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/ubicacion.png"/><a className={styles.anchorText}>Blvd. Canuto Ibarra #325 Nte. Fracc. Cuauhtémoc, Los Mochis, Sin.</a></li>
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/telefonofijo.png"/><a className={styles.anchorText} href="tel:+6688154679">(668) 815 4679</a></li>
                </ul>
                 
                <Mensaje></Mensaje>
                
                <Red></Red>
        </div>

        </div>
       
    )
}