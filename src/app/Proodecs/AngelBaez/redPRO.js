import style from "../../components/redes/red.module.css";

import "tailwindcss/tailwind.css";

export default function Red() {
  const styleFlex =
    "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";
  const persona = {
    whatsappurl: "https://wa.me/6442617543",
    facebookurl:
      "https://www.facebook.com/Proodecs.organics/?locale=hi_IN&_rdr",
    instagramurl: "https://www.instagram.com/proodecs/",
    linkedin: "https://mx.linkedin.com/in/josé-ángel-báez-olivo-097081120",
    telefono: "6442617543",
    sitioweb: "proodecs.com",
    email: "mailto:abaez@proodecs.com",
    dropbox:
      "https://www.dropbox.com/scl/fo/0w39vhj4ik9o9mvt0a7jg/ADro7G2LL1KUbQQfu8RyYjg?rlkey=b1cq3vquidjmwi639lj12zht3&st=7pov34we&dl=0",
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
          <a href={persona.googleNegocio} target="_blank">
            <img src="/images/íconoDropBox.png" className={style.imgRed} />
            <p>Dropbox</p>
          </a>
        </div>
        <div className={styleFlex}>
          <p href={persona.dropbox} target="_blank"></p>
        </div>
      </div>
    </div>
  );
}
