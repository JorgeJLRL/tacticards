import style from "./LandingPage.css";
import React from "react";

export default function TarjetasInteligentes() {
  return (
    <div className="bannertarjetas w-full max-h-full md:p-10 p-5">
      <div className="flex h-full md:flex-row items-center justify-center relative flex-col-reverse">
        <div className="md:mr-3 mr-0 flex md:flex-1 flex-col justify-center  md:text-left text-center">
          <p className="font-NexaThin my-6  text-3xl">
            La mejor primera impresion
          </p>
          <p className="font-Cocogoose my-6 text-5xl">
            Tarjetas de Presentacion Inteligentes
          </p>
          <p className="font-Georama my-6 text-4xl">
            La nueva generación en tarjetas de presentación y gafetes
          </p>
        </div>
        <div className=" md:overflow-visible md:flex-1 ">
          <div className=" flex justify-center md:min-w-[50%]  min-w-[100%] ">
            <div className="h-[150px] md:h-[450px] w-[60%] md:left-0 left-3 md:w-[70%] relative flex justify-center items-center">
              <img
                className="h-full w-full -rotate-17 object-contain relative top-[140px]"
                src="/images/landingPage/GafetEmpresarial.webp"
                alt="Gafete Empresarial"
              />
            </div>
            <div className="h-[350px] md:h-[650px] w-[65%] md:w-[70%] md:right-[17%] right-3  relative flex justify-center items-center">
              <img
                className="h-full w-full -rotate-17 object-contain"
                src="/images/landingPage/TarjetaPresentacionDigital.webp"
                alt="Tarjeta Presentación Digital"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
