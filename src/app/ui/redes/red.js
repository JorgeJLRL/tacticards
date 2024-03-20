import style from "../redes/red.module.css"
export default function Red(){
    
    const styleFlex= "flex-1 items-center justify-center flex flex-col text-center flex-wrap"
    return(
        <div>
            <div className={style.boxflex}>
                <div className={styleFlex}>
                    <img src="/images/whatsapp.png" className={style.imgRed}/>
                    <p>Whatsapp</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/facebook.png" className={style.imgRed}/>
                    <p>Facebook</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/instagram.png" className={style.imgRed}/>
                    <p>Instagram</p>
                </div>
            </div>

                <div className={style.boxflex}>
                <div className={styleFlex}>
                    <img src="/images/linkedin.png" className={style.imgRed}/>
                    <p>Linkedin</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/ubication.png" className={style.imgRed}/>
                    <p>Ubicacion</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/unnamed.png" className={style.imgRed}/>
                    <p>WhatsApp Business</p>
                </div>
            
            </div>

                <div className={style.boxflex}>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/telephone.png" className={style.imgRed}/>
                    <p>Llamar</p>
                </div>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/website.png" className={style.imgRed}/>
                    <p>Sitio Web</p>
                </div>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/message.png" className={style.imgRed}/>
                    <p>E-mail</p>
                </div>
            </div>

        </div>
    )
}