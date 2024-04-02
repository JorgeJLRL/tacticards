import styles from "../pedrobaez/pedro-baez.module.css";
import ButtonTacticas from "../ui/button/button.js"
import Mensaje from "../contact.client"
import React from "react"
import Red from "../components/redes/red.js"



export default function User(){

    return(
       
        <div className={styles.imagebg}>
            
                <div className={styles.imageBoxBackground}>
                    <img
                    src={"/images/header.png"}
                    className={styles.imageBackground}
                    />
                </div>
                <img
                src={"/images/perfilOculto.png"}
                           className={styles.userImg}
                />
         


        <div className={styles.contentBox} >
    
                <div className="flex justify-normal items-center flex-col">
                    <h2>Pedro Baez</h2>
                    <p>Director de Marketing</p>
                    <p>-Tacticas-</p>
                </div>
    
    
                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}><img src="/images/telephoneRad.png"/><a className={styles.anchorText} href="tel:+34678567876;?
                    &amp;name=Javier%20Robles">(668)8562647</a></li>
                    <li className={styles.listContact}><img src="/images/MessageRad.png"/><a className={styles.anchorText}>pedrobaez@tacticas.mx</a></li>
                    <li className={styles.listContact}><img src="/images/worldRad.png"/><a className={styles.anchorText} href="https://tacticas.mx/" target="_blank">www.tacticas.mx</a></li>
                    <li className={styles.listContact}><img src="/images/positionRad.png"/><a className={styles.anchorText}>H. Galeana 1491, Fracc. Sta Teresa, <br/> Los Mochis, Sin. CP 81271</a></li>
                    <li className={styles.listContact}><img src="/images/cellphoneRad.png"/><a className={styles.anchorText}>(668)8188629</a></li>
                </ul>
                 
                <Mensaje></Mensaje>
                <Red></Red>
        </div>

        </div>
       
    )
}