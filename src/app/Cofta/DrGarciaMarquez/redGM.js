import style from "../../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex =
    "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/6682255985",
    facebookurl: "https://www.facebook.com/cofta.mx",
    instagramurl: "https://www.instagram.com/oftalmologialosmochis/",
    ubicacion: "https://maps.app.goo.gl/U5StjHgywK5uQvgT6",
    telefono: "6688155308",
    sitioweb: "https://cofta.mx/",
    email: "mailto:hirammurrieta@diesel.plus",
    tiktok: "https://www.tiktok.com/@dr.garciamarquez",
    youtube: "https://www.youtube.com/@CentroOftalmologicoDeLosMochis",
    googleNegocio: "https://g.page/r/CdRjQFzOIi3GEAI/review",
    twitter: "https://twitter.com/coftalm",
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
          <a href={[persona.sitioweb]} target="_blank">
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
        <div className={styleFlex}>
          <a href={persona.tiktok} target="_blank">
            <img src="/images/logoTikTok.png" className={style.imgRed} />
            <p>TikTok</p>
          </a>
        </div>
        <div className={styleFlex}>
          <a href={persona.youtube} target="_blank">
            <img src="/images/logoYoutube.png" className={style.imgRed} />
            <p>Youtube</p>
          </a>
        </div>
      </div>

      <div className={style.boxflex}>
        <div className={styleFlex}>
          <a href={persona.googleNegocio} target="_blank">
            <img
              src="/images/logoGoogleMiNegocio.png"
              className={style.imgRed}
            />
            <p>Mi Negocio</p>
          </a>
        </div>

        <div className={styleFlex}>
          <a href={persona.twitter} target="_blank">
            <img src="/images/logoX.png" className={style.imgRed} />
            <p>Twitter</p>
          </a>
        </div>
        <div className={styleFlex}>
          <p href={persona.twitter} target="_blank"></p>
        </div>
      </div>
    </div>
  );
}
