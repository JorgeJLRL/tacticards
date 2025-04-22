"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  // Inicializa isWide en `false` o un valor predeterminado
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    // Solo ejecutamos este código cuando el componente se monta en el cliente
    if (typeof window !== "undefined") {
      // Establece el valor inicial de isWide
      setIsWide(window.innerWidth > 600);

      // Función para manejar el cambio de tamaño de la ventana
      const handleResize = () => {
        setIsWide(window.innerWidth > 600);
      };

      // Añadir el event listener para el cambio de tamaño
      window.addEventListener("resize", handleResize);

      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Solo ejecutamos este efecto una vez al montar el componente

  return (
    <div className="bg-[#08a6b2] text-white font-Georama w-full flex justify-center flex-col items-center md:py-10 py-2">
      {isWide && (
        <div className="min-w-[70%] flex">
          <div className="flex flex-col flex-1 justify-center items-end">
            <div className="flex justify-center items-center flex-col">
              <p className="text-lg py-2 align-center ">¡Siguenos!</p>
              <div className="flex justify-end items-end">
                <div className="w-12 h-auto mx-1">
                  <a href="https://www.facebook.com/TactiCardsMX" Target="_blank">
                    <img
                      className="w-full h-full "
                      src="/images/landingPage/facebook.svg"
                    ></img>
                  </a>
                </div>
                <div className="w-12 h-auto mx-1">
                  <a href="https://www.instagram.com/tacticards.25/" Target="_blank">
                    <img
                      className="w-full h-full"
                      src="/images/landingPage/instagram.svg"
                    ></img>
                  </a>
                </div>
                <div className="w-12 h-auto mx-1">
                  <a href="https://x.com/TactiCardsMX" Target="_blank">
                    <img
                      className="w-full h-full"
                      src="/images/landingPage/X.svg"
                    ></img>
                  </a>
                </div>
                <div className="w-12 h-auto mx-1">
                  <a href="https://www.linkedin.com/company/106918067/admin/dashboard/" Target="_blank">
                    <img
                      className="w-full h-full"
                      src="/images/landingPage/linkedin.svg"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-items-center items-center">
            <div className="w-28">
              <img
                className="w-full"
                src="/images/landingPage/LogoTacticardsVertical.webp"
              ></img>
            </div>
            <p className="text-lg py-2">Un producto de:</p>
            <div className="w-24">
              <img
                className="w-full"
                src="/images/landingPage/TacticasLogo.webp"
              ></img>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-start">
            <p className="text-lg py-2">Facturación</p>
            <p className="text-lg py-2">Soporte</p>
            <p className="text-lg py-2">Ventas</p>
            <p className="text-lg py-2">Plataforma Cliente</p>
            <p className="text-lg py-2">(668) 856 2647</p>
          </div>
        </div>
      )}
      {!isWide && (
        <div className="min-w-[70%] flex flex-col">
          <div className="flex flex-1 justify-items-center items-center">
            <div className="w-28 mx-3">
              <img
                className="w-full"
                src="/images/landingPage/LogoTacticardsVertical.webp"
              ></img>
            </div>
            <p className="text-lg mx-3">Un producto de:</p>
            <div className="w-24 mx-3">
              <img
                className="w-full "
                src="/images/landingPage/TacticasLogo.webp"
              ></img>
            </div>
          </div>
          <div className="flex flex-col  flex-1 justify-center items-center">
            <p className="text-lg py-2">¡Siguenos!</p>
            <div className="flex justify-end items-end">
              <div className="w-12 h-auto mx-1">
                <img
                  className="w-full h-full"
                  src="/images/landingPage/facebook.svg"
                ></img>
              </div>
              <div className="w-12 h-auto mx-1">
                <img
                  className="w-full h-full"
                  src="/images/landingPage/instagram.svg"
                ></img>
              </div>
              <div className="w-12 h-auto mx-1">
                <img
                  className="w-full h-full"
                  src="/images/landingPage/X.svg"
                ></img>
              </div>
              <div className="w-12 h-auto mx-1">
                <img
                  className="w-full h-full"
                  src="/images/landingPage/linkedin.svg"
                ></img>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center items-start px-6">
            <p className="text-lg py-2">Facturación</p>
            <p className="text-lg py-2">Soporte</p>
            <p className="text-lg py-2">Ventas</p>
            <p className="text-lg py-2">Plataforma Cliente</p>
            <p className="text-lg py-2">(668) 856 2647</p>
          </div>
        </div>
      )}{" "}
      <div className="flex flex-wrap text-2xl mx-2 justify-center">
        <p className="text-lg">Aviso de privacidad</p>
        <p className="px-2"> | </p>
        <p className="text-lg">Términos y condiciones</p>
        <p className="px-2"> | </p>
        <p className="text-lg">Política de Envíos y Devoluciones</p>
      </div>
    </div>
  );
}
