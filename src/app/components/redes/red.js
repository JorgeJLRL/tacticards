import style from "../redes/red.module.css"


import 'tailwindcss/tailwind.css'

export default function Red(){
    
    const styleFlex= "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]"
    return(
        <div>
            <div className={style.boxflex}>
                <a className={styleFlex} href="https://wa.me/6688562647">
                    <img src="/images/whatsapp.png" className={style.imgRed} />
                    <p>Whatsapp</p>
                </a>
                <a className={styleFlex} href="https://www.facebook.com/baezvisaiz" target="_blank">
                    <img src="/images/facebook.png" className={style.imgRed}/>
                    <p>Facebook</p>
                </a>
                <a className={styleFlex} href="https://www.instagram.com/pedro_baezv/" target="_blank">
                    <img src="/images/instagram.png" className={style.imgRed}/>
                    <p>Instagram</p>
                </a>
            </div>

                <div className={style.boxflex}>
                <div className={styleFlex}>
                    <img src="/images/linkedin.png" className={style.imgRed}/>
                    <p>Linkedin</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/iconodeubicacion.png" className={style.imgRed}/>
                    <p>Ubicacion</p>
                </div>
                <div className={styleFlex}>
                    <img src="/images/unnamed.png" className={style.imgRed}/>
                    <p>WhatsApp Business</p>
                </div>
            
            </div>

                <div className={style.boxflex}>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/iconodetelefono.png" className={style.imgRed}/>
                    <p>Llamar</p>
                </div>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/iconodesitioweb.png" className={style.imgRed}/>
                    <p>Sitio Web</p>
                </div>
                <div className="flex-1 items-center justify-center flex flex-col text-center">
                    <img src="/images/iconodecorreo.png" className={style.imgRed}/>
                    <p>E-mail</p>
                </div>
            </div>

        </div>
    )
}