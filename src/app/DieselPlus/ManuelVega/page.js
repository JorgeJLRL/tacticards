import styles from "../../DieselPlus/dieselplus.module.css";
import ButtonTacticas from "../../ui/button/button.js"
import Mensaje from "../../DieselPlus/ManuelVega/contactMV.client"
import React from "react"
import Red from "../../components/dieselplusredes/ManuelVega/redMV"




export default function User(){

    const fotoperfil= "/images/ManuelVega.png"
    const name= "Manuel Vega Cedano";
    const puesto = "Agente de Ventas";
    const empresa = "DiéselPlus";
    const whatsapp = "6681999421"
    const correo = "ventas3obregon@diesel.plus"
    const sitioweb = "https://www.dieselplus.com.mx"
    const ubicacion = "Carretera Norman E. Bourlag S/N, Campo 6, Cajeme, Sonora"
    const telefonofijo = "6641430815"
    const namecontact = "Manuel%Vega"
    

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
                    &amp;name=${namecontact}`}>(668) 199 9421</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/Correo.png"/><a className={styles.anchorText}>{correo}</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/sitioweb.png"/>
                    <a className={styles.anchorText} href={sitioweb} target="_blank">{sitioweb}</a></li>
                    
                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/ubicacion.png"/><a className={styles.anchorText}>{ubicacion}</a></li>

                    <li className={styles.listContact}><img className={styles.firstsection}  src="/images/telefonofijo.png"/><a className={styles.anchorText} href={`tel:+${telefonofijo}`}>(664) 143 0815</a></li>
                </ul>
                 
                <Mensaje></Mensaje>
                
                <Red></Red>
        </div>

        </div>
       
    )
}