"use client";
import { useState } from "react";
import TituloSeccion from "./TituloSeccion";
import { useInView } from "react-intersection-observer";

export default function Preguntas() {
  const [desplegar, setDesplegar] = useState({});
  
  const { ref: PreguntasRef, inView: PreguntasinView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // Usa false si quieres que cambie al entrar/salir del viewport
  });
  const PreguntasDiv = PreguntasinView ? "opacity-100" : "opacity-0";



  function estado(index) {
    setDesplegar((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  const arreglo = [
    {
      pregunta: "- ¿Cuánto cuesta cada TáctiCard?",
      contenido:
        "Adquirir tu TáctiCard cuesta $730 MXN e incluye tu tarjeta física de PVC con chip NFC...",
    },
    {
      pregunta: "- ¿Hacen envíos a domicilio?",
      contenido:
        "Sí, hacemos envíos a toda la República Mexicana con cargo al cliente.",
    },
    {
      pregunta: "- ¿Cómo puedo solicitar mis TáctiCards?",
      contenido:
        "Puedes ponerte en contacto con nosotros por WhatsApp...",
    },
    {
      pregunta:
        "- ¿Se necesita una App para configurar o para escanear las TáctiCards?",
      contenido:
        "No es necesario, ese trabajo lo hacemos nosotros...",
    },
    {
      pregunta: "- ¿Cuánto tarda en llegar mi tarjeta física a mi domicilio?",
      contenido: "Entre 5 y 12 días hábiles.",
    },
    {
      pregunta: "- ¿Podría hacer cambios en mi tarjeta virtual?",
      contenido:
        "Claro, si necesitas hacer cambios en tu tarjeta virtual...",
    },
    {
      pregunta: "- ¿Hay algún costo de mantenimiento de mi tarjeta digital?",
      contenido:
        "Sí, mantener tu tarjeta digital en línea requiere un conjunto de esfuerzos...",
    },
  ];

  return (
    <div className="my-10 mb-32" id="Preguntas">
      <div className="mx-auto w-full max-w-[1250px]">
      <div ref={PreguntasRef}
        className={`w-full flex flex-col justify-center items-center text-center my-0 mx-auto transition-opacity duration-500 ${PreguntasDiv}`}> 
          <TituloSeccion text="Preguntas frecuentes" />
        </div>

        {arreglo.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: false, // Solo animar la primera vez
          });

          return (
            <ul
              ref={ref}
              key={index}
              className={`transition-all duration-700 ease-out transform ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } flex flex-col items-start max-w-full mx-5 border-b-2 border-black py-6 my-6 md:mx-auto px-4 sm:px-6 lg:px-8`}
            >
              <button
                className="flex justify-between items-center font-Georama text-2xl sm:text-2xl font-light text-left w-full"
                onClick={() => estado(index)}
              >
                {item.pregunta}
                <img
                  className="w-5 h-5"
                  src={
                    desplegar[index]
                      ? "/images/landingPage/minus.svg"
                      : "/images/landingPage/plus.svg"
                  }
                />
              </button>

              {desplegar[index] && (
                <li className="list-inside h-auto w-full font-Georama py-6 text-lg sm:text-xl font-light">
                  {item.contenido}
                </li>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
