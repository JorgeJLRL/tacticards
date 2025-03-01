"use client";
import TituloSeccion from "./TituloSeccion";
import React from "react";
import { useState, useEffect } from "react";

export default function FuncionalidadTarjetas() {
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
    <div className="w-full my-10 ">
      {isWide && (
        <div className="w-full h-full flex flex-col relative justify-center">
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto">
              <div
                className="flex flex-col items-start justify-center md:mx-16 mx-2  md:text-left  text-justify
"
              >
                <TituloSeccion text="¿Cómo funcionan?" />
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

              <div className="max-w-[400px] min-h-[400px] md:max-w-[500px]">
                <img
                  src="/images/landingPage/CelularTarjetas.webp"
                  alt="Celular con tarjeta"
                  className="w-full h-auto md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isWide && (
        <div className="w-full h-full flex flex-col relative justify-center">
          <div className="w-full flex flex-col justify-center items-center mx-auto">
            <div className="w-full px-3 md:px-16 sm:px-16 xl:px-16 2xl:px-16 lg:px-3 flex flex-col-reverse md:flex-row items-center justify-center my-0 mx-auto">
              <div
                className="flex flex-col items-start justify-center items-center md:mx-16 mx-2  md:text-left  text-justify
"
              >
                <TituloSeccion text="¿Cómo funcionan?" />
                <div className="max-w-[400px] min-h-[400px] md:max-w-[500px]">
                  <img
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
