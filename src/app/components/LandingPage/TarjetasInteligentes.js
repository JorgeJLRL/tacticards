"use client";
import React from "react";

import { useInView } from "react-intersection-observer";
import "./LandingPage.css"; 

export default function TarjetasInteligentes() {
  const { ref: refInview, inView: landingPageinView } = useInView({
    threshold: 0.2,
  });
  const landingPageDiv = landingPageinView ? "opacity-100" : "opacity-0";

  return (
    <div className="bannertarjetas w-full max-h-full md:p-10">
      <div
      ref={refInview}
        className={`flex h-full md:flex-row items-center justify-center relative flex-col-reverse transition-all duration-500 ease-in-out ${landingPageDiv}`}
      >
        <div className="md:mr-3 mr-0 flex md:flex-1 flex-col justify-center md:text-left text-center">
          <p className="font-NexaThin my-6 md:text-3xl text-2xl">
            La mejor primera impresión
          </p>
          <p className="font-Cocogoose my-6 md:text-5xl text-4xl">
            Tarjetas de Presentación Inteligentes
          </p>
          <p className="font-Georama my-6 md:text-4xl text-3xl">
            La nueva generación en tarjetas de presentación y gafetes
          </p>
        </div>
        <div className="md:overflow-visible overflow-hidden md:flex-1 h-auto">
          <div className="flex justify-center md:min-w-[50%] min-w-[100%]">
            <div className="h-[250px] md:h-[450px] w-[60%] md:left-0 left-3 md:w-[70%] relative flex justify-center items-center">
              <img
              loading="lazy"
                className="h-full w-full -rotate-17 object-contain relative top-[140px]"
                src="/images/landingPage/GafetEmpresarial.webp"
                alt="Gafete Empresarial"
              />
            </div>
            <div className="h-[450px] md:h-[650px] w-[65%] md:w-[70%] md:right-[17%] right-3 relative flex justify-center items-center">
              <img
              loading="lazy"
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
