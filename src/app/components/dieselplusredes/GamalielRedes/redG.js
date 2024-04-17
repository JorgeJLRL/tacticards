import style from "../../redes/red.module.css"


import 'tailwindcss/tailwind.css'

export default function Red(){
    
    const styleFlex= "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]"
    return(
        <div>
            <div className={style.boxflex}>
                <a className={styleFlex} href="https://wa.me/6672437043" target="_blank">
                    <img src="/images/whatsapp.png" className={style.imgRed} />
                    <p>Whatsapp</p>
                </a>
                <a className={styleFlex} href="https://www.facebook.com/DieselPlus1" target="_blank">
                    <img src="/images/facebook.png" className={style.imgRed}/>
                    <p>Facebook</p>
                </a>
                <a className={styleFlex} href="https://www.instagram.com/dieselplusmx/" target="_blank">
                    <img src="/images/instagram.png" className={style.imgRed}/>
                    <p>Instagram</p>
                </a>
            </div>

                <div className={style.boxflex}>
                <div className={styleFlex}>
                    <a href="https://maps.app.goo.gl/EyuDBCWnqgnicVJW7" target="_blank"> <img src="/images/iconodeubicacion.png" className={style.imgRed}/>
                    <p>Ubicacion</p></a>
                </div>
                <div className={styleFlex}>
                    <a href="tel:+6672437043">
                        <img src="/images/iconodetelefono.png" className={style.imgRed}/>
                        <p>Llamar</p>
                    </a>
                </div>
                <div className={styleFlex}>
                <a href="https://www.dieselplus.com.mx" target="_blank">
                    <img src="/images/iconodesitioweb.png" className={style.imgRed}/>
                    <p>Sitio Web</p></a>
                </div>
            
            </div>

                <div className={style.boxflex}>
                
                <div className={styleFlex}>
                    <a href="mailto:ventas5@diesel.plus" target="_blank">
                        <img src="/images/iconodecorreo.png" className={style.imgRed}/>
                        <p>E-mail</p>
                    </a>
                </div>
            </div>

        </div>
    )
}