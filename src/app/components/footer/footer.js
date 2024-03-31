
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
                    <p>Siguenos:</p>
                    <div className={Style.ContentBoxImages}>
                        <div className={Style.imgSizeBox}>
                            <img className={Style.ContentImages} src="../images/facebookLogo.png"></img>
                        </div>
                        <div className={Style.imgSizeBox}>
                        <img className={Style.ContentImages} src="../images/linkedinLogo.png"></img>
                        </div>
                        <div className={Style.imgSizeBox}>
                        <img className={Style.ContentImages} src="/images/igLogo.png"></img>
                        </div>
                    </div>
                    <img src="/images/disenoLogo.png" className={Style.Logo}></img>
                </div>
            </div>
            <div className={Style.ContentBox3}>
                Copyright @ Tácticards 2024
            </div>
        </div>

    )
}