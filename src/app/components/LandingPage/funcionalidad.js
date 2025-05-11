"use client";

import TituloSeccion from "./TituloSeccion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FuncionalidadTarjetas() {
  const { ref: contentCL, inView: CLinView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // Usa false si quieres que cambie al entrar/salir del viewport
  });

  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWide(window.innerWidth > 766);
      const handleResize = () => setIsWide(window.innerWidth > 766);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const opacityDiv = CLinView ? "opacity-100" : "opacity-0";

  return (
    <div className="w-full my-10">
      {isWide ? (
        <div
          ref={contentCL}
          className={`w-full h-full flex flex-col relative justify-center transition-opacity duration-500 ${opacityDiv}`}
        >
          {/* Contenido aquí */}
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto">
              <div className="flex flex-col items-start justify-center md:mx-16 mx-2 text-justify md:text-left">
                <TituloSeccion text="¿Cómo funcionan?" />
                <p className="text-2xl my-3">
                  Tu TáctiCard puede ser portada como un gafet de identificación normal, pero al escanearse, se abrirá tu <b>tarjeta de presentación virtual.</b>
                </p>
                <p className="text-2xl my-3">
                  Tus clientes podrán ver tus datos, guardar tu contacto a su teléfono, acceder a tus redes sociales y mucho más; todo de manera rápida, sencilla y realmente impresionante.
                </p>
              </div>
              <div className="max-w-[400px] min-h-[400px] md:max-w-[500px]">
                <img loading="lazy" src="/images/landingPage/CelularTarjetas.webp" alt="Celular con tarjeta" className="w-full h-auto md:h-full" />
              </div>
            </div>
          </div>
        </div>): (
        <div
        ref={contentCL} 
         className={`w-full h-full flex flex-col relative justify-center transition-opacity duration-500 ${opacityDiv}`}>
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto">
              <div
                className="flex flex-col items-start justify-center items-center md:mx-16 mx-2  md:text-left  text-justify
"
              >
                <TituloSeccion text="¿Cómo funcionan?" />
                <div className="max-w-[400px] min-h-[400px] md:max-w-[500px]">
                  <img
                  loading="lazy"
                    src="/images/landingPage/CelularTarjetas.webp"
                    alt="Celular con tarjeta"
                    className="w-full h-auto md:h-full"
                  />
                </div>
                <p className="text-2xl md:text-2xl my-3 ">
                  Tu TáctiCard puede ser portada como un gafet de identificación
                  normal, pero al escanearse, se abrirá tu{" "}
                  <b>tarjeta de presentación virtual.</b>
                </p>
                <p className="text-2xl md:text-2xl my-3">
                  Tus clientes podrán ver tus datos, guardar tu contacto a su
                  teléfono, acceder a tus redes sociales y mucho más; todo de
                  manera rápida, sencilla y realmente impresionante.
                </p>
              </div>  
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
