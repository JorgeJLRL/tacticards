import style from "../../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex =
    "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/6681165632",
    facebookurl: "https://www.facebook.com/ortomedicaLM",
    instagramurl: "https://www.instagram.com/ortomedicalm",
    ubicacion: "https://g.co/kgs/4Ts4YLN",
    telefono: "6688188925",
   
    email: "mailto:albertoalvarado_60@hotmail.com",
  };

  return (
    <div>
      <div className={style.boxflex}>
        <a className={styleFlex} href={persona.whatsappurl} target="_blank">
          <img src="/images/whatsapp.png" className={style.imgRed} />
          <p>Whatsapp</p>
        </a>
        <a className={styleFlex} href={persona.facebookurl} target="_blank">
          <img src="/images/facebook.png" className={style.imgRed} />
          <p>Facebook</p>
        </a>
        <a className={styleFlex} href={persona.instagramurl} target="_blank">
          <img src="/images/instagram.png" className={style.imgRed} />
          <p>Instagram</p>
        </a>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.ubicacion} target="_blank">
            {" "}
            <img src="/images/iconodeubicacion.png" className={style.imgRed} />
            <p>Ubicacion</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={`tel:+${persona.telefono}`}>
            <img src="/images/iconodetelefono.png" className={style.imgRed} />
            <p>Llamar</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.email} target="_blank">
            <img src="/images/iconodecorreo.png" className={style.imgRed} />
            <p>E-mail</p>
          </a>
        </div>
    
      </div>

      
    </div>
  );
}
