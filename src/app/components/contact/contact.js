"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Style from "../contact/contact.module.css";
import BotonForm from "../../ui/botonForm/botonForm";
import TituloSeccion from "../LandingPage/TituloSeccion";

function Contactanos() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const send = () => {
    const objetoFormulario = {
      nombre,
      telefono,
      email,
      mensaje,
    };
    emailjs
      .send(
        "service_uyeuldl",
        "template_th1deaj",
        objetoFormulario,
        "MaJhlLWAUOOw66FNB"
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={Style.contactField} id="contactanos">
      <div className="my-10 flex flex-col justify-center items-center">
        <h2 className="font-Cocogoose my-10 text-5xl h-auto">
          ¡Haz tu pedido!
        </h2>
        <p className="text-xl sm:px-[100px] md:px-[100px] lg:px-[100px] xl:px-[100px] 2xl:px-[300px]   px-[0px] text-center">
          Envía tus datos y nos pondremos en contacto contigo para hacer las
          TáctiCards que requieras y enviarlas a tu ubicación.
        </p>
        <div className={Style.formInputContent}>
          <div className={Style.form__field}>
            <input
              type="input"
              className={Style.form__field}
              placeholder="Nombre"
              name="Nombre"
              id="Nombre"
              required
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <input
              type="input"
              className={Style.form__field}
              placeholder="Correo"
              name="Correo"
              id="Correo"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="input"
              className={Style.form__field}
              placeholder="Telefono"
              name="Telefono"
              id="Telefono"
              required
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
            <textarea
              type="input"
              className={Style.form__fieldMensaje}
              placeholder="Mensaje"
              name="Mensaje"
              id="Mensaje"
              required
              onChange={(e) => {
                setMensaje(e.target.value);
              }}
            />
            <div className="mx-auto md:w-[20%] w-[40%] xl:w-[50%] my-0 flex justify-center items-center">
              <div className="w-auto">
                <BotonForm
                  className=""
                  type="submit"
                  variant="contained"
                  onClick={send}
                  text={"Enviar"}
                ></BotonForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
