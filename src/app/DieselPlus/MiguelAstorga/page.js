import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js"
import Mensaje from "../../DieselPlus/MiguelAstorga/contactMA.client.js"
import React from "react"
import Red from "../../components/dieselplusredes/MiguelAstorgaRedes/redMA.js"




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
                src={"/images/MiguelAstorga.png"}
                           className={styles.userImg}
                />
         


        <div className={styles.contentBox} >
    
                <div className="flex justify-normal items-center flex-col">
                    <h2>Miguel Astorga</h2>
                    <p>Agente de Ventas</p>
                    <p>DiéselPlus</p>
                </div>
    
    
                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}><img src="/images/telephoneRad.png"/><a className={styles.anchorText} href="tel:+6681429508;?
                    &amp;name=Miguel%Astorga">(668) 142 9508</a></li>
                    <li className={styles.listContact}><img src="/images/MessageRad.png"/><a className={styles.anchorText}>ventas1@diesel.plus</a></li>
                    <li className={styles.listContact}><img src="/images/worldRad.png"/><a className={styles.anchorText} href="https://www.dieselplus.com.mx" target="_blank">www.dieselplus.com.mx</a></li>
                    <li className={styles.listContact}><img src="/images/positionRad.png"/><a className={styles.anchorText}>Blvd. Canuto Ibarra #325 Nte. Fracc. Cuauhtémoc, Los Mochis, Sin.</a></li>
                    <li className={styles.listContact}><img src="/images/cellphoneRad.png"/><a className={styles.anchorText} href="tel:+6688154679">(668) 815 4679</a></li>
                </ul>
                <Mensaje></Mensaje>
                
                <Red></Red>
        </div>

        </div>
       
    )
}