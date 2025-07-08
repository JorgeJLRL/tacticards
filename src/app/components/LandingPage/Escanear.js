"use client";
import TituloSeccion from "./TituloSeccion";
import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Escanear() {
  
  const { ref: EscanearRef, inView: EscanearinView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // Usa false si quieres que cambie al entrar/salir del viewport
  });
  const opacityDiv = EscanearinView ? "opacity-100" : "opacity-0";

  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    // Solo ejecutamos el código cuando el componente se monta en el cliente
    if (typeof window !== "undefined") {
      // Establece el valor inicial de isWide según el tamaño de la ventana
      setIsWide(window.innerWidth > 766);

      // Función para manejar el cambio de tamaño de la ventana
      const handleResize = () => {
        setIsWide(window.innerWidth > 766);
      };

      // Añadir el event listener para el cambio de tamaño
      window.addEventListener("resize", handleResize);

      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  return (
    <div className="w-full my-10">
      {isWide ?(
        <div ref={EscanearRef}
        className={`w-full h-full flex flex-col relative justify-center transition-opacity duration-500 ${opacityDiv}`}>
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div
              className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto
"
            >
              <div className="flex flex-col justify-start  md:mx-16 mx-2 items-start md:text-left text-justify">
                <TituloSeccion text="¿Cómo escanear mi TáctiCard?" />
                <p className="text-2xl md:text-2xl my-3 ">
                  Tu TáctiCard puede escanearse con un smartphone de dos
                  maneras:
                </p>
                <ul className="w-full list-inside md:my-2 my-3 text-2xl md:text-2xl">
                  <li>
                    <b>Proximidad:</b> Con la tecnología NFC, al acercar la
                    tarjeta/gafet al smartphone, se abrirá la tarjeta virtual.
                  </li>
                  <li className="my-10">
                    <b>Código QR:</b> Tu TáctiCard puede tener impreso un código
                    QR que dirija a tus clientes a tu tarjeta virtual.
                  </li>
                </ul>
              </div>

              <div className="max-w-[400px] md:max-w-[500px]">
                <img
                loading="lazy"
                  src="/images/landingPage/GafetEmpresarialInteligente.webp"
                  alt="Celular con tarjeta"
                  className="w-full h-auto md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div 
        ref={EscanearRef}
        className={`w-full h-full flex flex-col relative justify-center transition-opacity duration-500 ${opacityDiv} `}>
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div
              className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto
"
            >
              <div className="flex flex-col justify-start items-center  md:mx-16 mx-2 items-start md:text-left text-justify">
                <TituloSeccion text="¿Cómo escanear mi TáctiCard?" />
                <div className="max-w-[400px] md:max-w-[500px]">
                  <img
                  loading="lazy"
                    src="/images/landingPage/GafetEmpresarialInteligente.webp"
                    alt="Celular con tarjeta"
                    className="w-full h-auto md:h-full"
                  />
                </div>
                <p className="text-2xl md:text-2xl my-3 ">
                  Tu TáctiCard puede escanearse con un smartphone de dos
                  maneras:
                </p>
                <ul className="w-full list-inside md:my-2 my-3 text-2xl md:text-2xl">
                  <li>
                    <b>Proximidad:</b> Con la tecnología NFC, al acercar la
                    tarjeta/gafet al smartphone, se abrirá la tarjeta virtual.
                  </li>
                  <li className="my-10">
                    <b>Código QR:</b> Tu TáctiCard puede tener impreso un código
                    QR que dirija a tus clientes a tu tarjeta virtual.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
