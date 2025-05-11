"use client";
import { IoMenuOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Menu() {
  const [isWide, setIsWide] = useState(false);
  const [value, setValue] = useState(true);

  useEffect(() => {
    // Solo ejecutamos el código cuando el componente se monta en el cliente
    if (typeof window !== "undefined") {
      // Establece el valor inicial de isWide según el tamaño de la ventana
      setIsWide(window.innerWidth > 900);

      // Función para manejar el cambio de tamaño de la ventana
      const handleResize = () => {
        setIsWide(window.innerWidth > 900);
      };

      // Añadir el event listener para el cambio de tamaño
      window.addEventListener("resize", handleResize);

      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  function toggleState() {
    setValue(!value);
  }

  return (
    <div className="md:h-18 h-20">
      {isWide ? (
        // Pantalla ancha (más de 900px)
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex justify-center flex-1">
            <img
              src="/images/Logo.png"
              className="TacticardsLogoHeader"
              alt="Logo"
            />
          </div>
          <div className="flex flex-[2] justify-center items-centerjj">
            <ul className="flex list-none font-CenturyGothic font-normal">
              <Link href="/">
                {" "}
                <li className="px-10">Comprar</li>{" "}
              </Link>
              <Link href="#Preguntas">
                <li className="px-10">Preguntas Frecuentes</li>
              </Link>
              <Link href="#contactanos">
                <li className="px-10">Contacto</li>
              </Link>
              <li className="px-10">Plataforma Cliente</li>
            </ul>
          </div>
        </div>
      ) : (
        // Pantalla pequeña (menos de 900px)
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex-1 flex justify-center">
            <img
              src="/images/Logo.png"
              className="TacticardsLogoHeader"
              alt="Logo"
            />
          </div>
          {value ? (
            <div className="flex items-center justify-end">
              <button onClick={toggleState}>
                <IoMenuOutline className="h-8 w-8" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-end">
              <button onClick={toggleState}>
                <IoMdClose className="h-8 w-8" />
              </button>
              <div className="menuDisplayed">
                <Link href="/">
                  <p className="textMenu font-CenturyGothic text-lg">
                    <button onClick={toggleState}>Comprar</button>
                  </p>
                </Link>
                <Link href="/#Preguntas" prefetch={false}>
                  <p className="textMenu font-CenturyGothic text-lg">
                    <button onClick={toggleState}>Preguntas Frecuentes</button>
                  </p>
                </Link>
                <Link href="/">
                  <p className="textMenu font-CenturyGothic text-lg">
                    <button onClick={toggleState}>Contacto</button>
                  </p>
                </Link>
                <Link href="#contactanos">
                  <p className="textMenu font-CenturyGothic text-lg">
                    <button onClick={toggleState}>Plataforma Cliente</button>
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
