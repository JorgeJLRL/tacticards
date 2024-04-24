import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js"
import Mensaje from "../../DieselPlus/HiramMurrieta/contactHM.client.js"
import React from "react"
import Red from "../../components/dieselplusredes/HiramMurrieta/redHM.js"




export default function User(){

    const fotoperfil= "/images/HiramMurrieta.png"
    const name= "Hiram Murrieta";
    const puesto = "Director Adjunto";
    const empresa = "DiéselPlus";
    const whatsapp = "6682221178"
    const correo = "hirammurrieta@diesel.plus"
    const sitioweb = "https://www.dieselplus.com.mx"
    const ubicacion = "Blvd. Canuto Ibarra #325 Nte. Fracc. Cuauhtémoc, Los Mochis, Sin."
    const telefonofijo = "6688154679"
    const namecontact = "Hiram%Murrieta"
    

    return(
       
        <div className={styles.imagebg}>
            
                <div className={styles.imageBoxBackground}>
                    <img
                    src={"/images/PortadaDieselPlus.png"}
                    className={styles.imageBackground}
                    />
                </div>
                <img
                src={fotoperfil}
                           className={styles.userImgBB}
                />
         


        <div className={styles.contentBox} >
    
                <div className="flex justify-normal items-center flex-col">
                    <strong><h2>{name}</h2></strong>
                    <p>{puesto}</p>
                    <p>{empresa}</p>
                </div>
    
    
                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}><img  className={styles.firstsection} src="/images/Telefonowa.png"/><a className={styles.anchorText} href={`tel:+${whatsapp}
                    &amp;name=${namecontact}`}>(668) 222 1178</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/Correo.png"/><a className={styles.anchorText}>{correo}</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/sitioweb.png"/>
                    <a className={styles.anchorText} href={sitioweb} target="_blank">{sitioweb}</a></li>
                    
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/ubicacion.png"/><a className={styles.anchorText}>{ubicacion}</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/telefonofijo.png"/>
                         <a className={styles.anchorText} href={`tel:+${telefonofijo}`}>(668) 815 4679</a>
                    </li>
                </ul>
                 
                <Mensaje></Mensaje>
                
                <Red></Red>
        </div>

        </div>
       
    )
}