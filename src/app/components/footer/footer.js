import { ST } from "next/dist/shared/lib/utils"
import Style from "../footer/footer.module.css"
export default function Footer() {
    return (
       
        <div className={Style.FooterBox}>
            <div className={Style.Content}>
                <div className={Style.ContentBox1}>
                    <p className="py-1">Aviso de privacidad</p>
                    <p className="py-1">Términos y condiciones</p>
                    <p className="py-1">+52 (668) 856 2647</p>
                    <p className="py-1">info@tacticards.mx</p>

                </div>
                <div className={Style.ContentBox2}>
                    <p>Siguenos</p>
                    <div className={Style.ContentBoxImages}>
                        <img className={Style.ContentImages} src="../images/Diseño de tarjeta de presentación digital TáctiCards-16.png"></img>
                        <img className={Style.ContentImages} src="../images/Diseño de tarjeta de presentación digital TáctiCards-14.png"></img>
                        <img className={Style.ContentImages} src="../images/Diseño de tarjeta de presentación digital TáctiCards-15.png"></img>
                    </div>
                    <img src="../images/Diseño de logo TáctiCards blanco_Mesa de trabajo 1-02.png" className={Style.Logo}></img>
                </div>
            </div>
            <div className={Style.ContentBox3}>
                Copyright @ Tácticards 2024
            </div>
        </div>
        
    )
}