import styles from "../ui/home.module.css"
import stylecell from "../ui/cellphoneUsers/cellphone.module.css"
import ButtonTacticas from "../ui/button/button"
import Mensaje from "../components/contact.client"
import Red from "../components/redes/red"

export default function User(){
    return(
        <div className={stylecell.imagebg}>
            
                <img
                src={"/images/header.png"}
                className={styles.imagebg}
                />
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
                    <li className="flex items-center justify-start py-1"><img src="./images/telephoneRad.png"/><a className="px-2" href="tel:+34678567876;?
                    &amp;name=Javier%20Robles">(668)8562647</a></li>
                    <li className="flex items-center justify-start py-1"><img src="./images/MessageRad.png"/><a className="px-2">pedrobaez@tacticas.mx</a></li>
                    <li className="flex items-center justify-start py-1"><img src="./images/worldRad.png"/><a className="px-2" href="https://tacticas.mx/" target="_blank">www.tacticas.mx</a></li>
                    <li className="flex items-center justify-start py-1"><img src="./images/positionRad.png"/><a className="px-2">H. Galeana 1491, Fracc. Sta Teresa, <br/> Los Mochis, Sin. CP 81271</a></li>
                    <li className="flex items-center justify-start py-1"><img src="./images/cellphoneRad.png"/><a className="px-2">(668)8188629</a></li>
                </ul>
                <ButtonTacticas></ButtonTacticas>   
                <Mensaje></Mensaje>
                <Red></Red>
        </div>

        </div>
    )
}