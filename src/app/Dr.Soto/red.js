import style from "../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex = "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/6672237783",
    facebookurl: "https://www.facebook.com/people/Dr-Carlos-Soto/61558187087432/",
    instagramurl: "https://www.instagram.com/tuortopedista_drsoto/",
    youtubeurl: "https://www.youtube.com/@tuortopedista_drsoto",
    tiktokurl: "https://www.tiktok.com/@tuortopedista_drsoto",
    linkedin: "",
    ubicacion: "https://maps.app.goo.gl/e1js6yvUi2voWRaz9",
    telefono: "6424221026",
    sitioweb: "",
    email: "mailto:dr.sototyo@gmail.com",
  };

  return (
    <div className="md:w-[70%] my-0 mx-auto">
      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.whatsappurl} target="_blank" className={style.anchor}>
            <img src="/images/whatsapp.png" className={style.imgRed} />
            <p>Whatsapp</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.facebookurl} target="_blank" className={style.anchor}>
            <img src="/images/facebook.png" className={style.imgRed} />
            <p>Facebook</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a className={style.anchor} href={persona.instagramurl} target="_blank">
            <img src="/images/instagram.png" className={style.imgRed} />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a className={style.anchor} href={persona.youtubeurl} target="_blank">
            <img src="/images/logoYoutube.png" className={style.imgRed} />
            <p>YouTube</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a className={style.anchor} href={`tel:+52${persona.telefono}`}>
            <img src="/images/iconodetelefono.png" className={style.imgRed} />
            <p>Llamar</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a className={style.anchor} href={persona.tiktokurl} target="_blank">
            <img src="/images/logoTikTok.png" className={style.imgRed} />
            <p>TikTok</p>
          </a>
        </div>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a className={style.anchor} href={persona.email} target="_blank">
            <img src="/images/iconodecorreo.png" className={style.imgRed} />
            <p>E-mail</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a className={style.anchor} href={persona.ubicacion} target="_blank">
            <img src="/images/iconodeubicacion.png" className={style.imgRed} />
            <p>Ubicacion</p>
          </a>
        </div>

        <div className={styleFlex}></div>
      </div>
    </div>
  );
}
