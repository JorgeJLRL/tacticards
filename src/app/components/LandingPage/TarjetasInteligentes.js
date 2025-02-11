import style from "./LandingPage.css";
import React from "react";
export default function TarjetasInteligentes() {
  return (
    <div className="bannertarjetas w-full h-[500px] py-6 ">
      <div className=" flex md:flex-row items-center justify-center relative flex-col">
        <div className="flex  p-6 flex-col justify-center">
          <p className="font-NexaThin text-xl">La mejor primera impresion</p>
          <p className="font-Cocogoose text-3xl">
            Tarjetas de Presentacion Inteligentes
          </p>
          <p className="font-Georama text-2xl">
            La nueva generación en tarjetas de presentación y gafetes
          </p>
        </div>

        <div className=" flex justify-center ">
          <div className="h-[100px] w-full">
            <img
              className="h-full w-full -rotate-[17deg] relative top-[60px]"
              src="/images/landingPage/GafetEmpresarial.webp"
            ></img>
          </div>
          <div className="h-[200px] w-full">
            <img
              className="h-full w-full -rotate-[17deg]"
              src="/images/landingPage/TarjetaPresentacionDigital.webp"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
