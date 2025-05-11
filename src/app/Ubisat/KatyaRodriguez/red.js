import style from "../../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex =
    "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/5216681240065",
    facebookurl: "https://www.facebook.com/ubisatmx/",
    instagramurl: "https://www.instagram.com/ubisatmx/?__pwa=1",
    linkedin: "https://www.linkedin.com/in/igas-control-volumétrico-856946349",
    ubicacion: "https://maps.app.goo.gl/9Zgm6LEaL57qM7Ew5",
    telefono: "6681240065",
    sitioweb: "https://ubisat.mx/",
    email: "mailto:krodriguez@ubisat.com.mx",
  };

  return (
    <div className="md:w-[70%] my-0 mx-auto">
      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.whatsappurl} target="_blank">
            <img src="/images/whatsapp.png" className={style.imgRed} />
            <p>Whatsapp</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.facebookurl} target="_blank">
            <img src="/images/facebook.png" className={style.imgRed} />
            <p>Facebook</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.instagramurl} target="_blank">
            <img src="/images/instagram.png" className={style.imgRed} />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.linkedin} target="_blank">
            {" "}
            <img src="/images/LogoLinkedln.png" className={style.imgRed} />
            <p>Linkedin</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={`tel:+${persona.telefono}`}>
            <img src="/images/iconodetelefono.png" className={style.imgRed} />
            <p>Llamar</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.sitioweb} target="_blank">
            <img src="/images/iconodesitioweb.png" className={style.imgRed} />
            <p>Sitio Web</p>
          </a>
        </div>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.email} target="_blank">
            <img src="/images/iconodecorreo.png" className={style.imgRed} />
            <p>E-mail</p>
          </a>
        </div>
        {/* <div className={styleFlex}>
          <a href={persona.dropbox} target="_blank">
            <img src="/images/iconoDropBox.png" className={style.imgRed} />
            <p>Dropbox</p>
          </a>
        </div> */}

        <div className={styleFlex}>
          <a href={persona.ubicacion} target="_blank">
            {" "}
            <img src="/images/iconodeubicacion.png" className={style.imgRed} />
            <p>Ubicacion</p>
          </a>
        </div>
        <div className={styleFlex}></div>
      </div>
    </div>
  );
}
