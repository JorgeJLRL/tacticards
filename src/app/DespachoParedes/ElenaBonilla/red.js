import style from "../../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex =
    "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/523117406182",
    ubicacion: "https://www.google.com/maps?q=21.472829818725586,-104.8676528930664&z=17&hl=es",
    telefono: "3117406182",
    email: "mailto:juridicos_bonilla@hotmail.com",
  };

  return (
    <div>
      
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
      <div className="w-full flex justify-center">
        
        <div className={style.boxflex}>
          <a className={`${styleFlex} max-w-2xs` } href={persona.whatsappurl} target="_blank">
            <img src="/images/whatsapp.png" className={style.imgRed} />
            <p>Whatsapp</p>
          </a>
        </div>
      </div>
 
    </div>
  );
}
