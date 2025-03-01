"use client";
import { useState } from "react";
import TituloSeccion from "./TituloSeccion";

export default function Preguntas() {
  const [desplegar, setDesplegar] = useState({});

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
        "Adquirir tu TáctiCard cuesta $730 MXN e incluye tu tarjeta física de PVC con chip NFC y tu tarjeta virtual que se abrirá al escanear la tarjeta física. Cada tarjeta física extra tiene un costo de $400 MXN.",
    },
    {
      pregunta: "- ¿Hacen envíos a domicilio?",
      contenido:
        "Sí, hacemos envíos a toda la República Mexicana con cargo al cliente.",
    },
    {
      pregunta: "- ¿Cómo puedo solicitar mis TáctiCards?",
      contenido:
        "Puedes ponerte en contacto con nosotros por WhatsApp, enviando el formulario de contacto con tus datos o también por nuestras redes sociales. Solicitaremos las imágenes que deseas que aparezcan en tu TáctiCard, así como los datos y links que deseas compartir (tus redes sociales, sitio web, dirección en Google Maps, etc.). Cuando tengamos tu tarjeta digital lista, te la enviaremos para tu evaluación, así como el diseño de tu tarjeta física. Una vez aprobado todo de tu parte y acreditar el pago del 50%, procedemos a imprimir tu tarjeta/gafet y te enviaremos una foto de la misma antes de realizar el envío a tu domicilio. Antes de este envío, te requeriremos el pago del 50% restante. Tu tarjeta física ya activada debería llegar a tu domicilio entre 5 y 12 días hábiles.",
    },
    {
      pregunta:
        "- ¿Se necesita una App para configurar o para escanear las TáctiCards?",
      contenido:
        "No es necesario, ese trabajo lo hacemos nosotros. Te entregaremos tu tarjeta activada y lista para que impresiones a tus clientes.",
    },
    {
      pregunta: "- ¿Cuánto tarda en llegar mi tarjeta física a mi domicilio?",
      contenido: "Entre 5 y 12 días hábiles.",
    },
    {
      pregunta: "- ¿Podría hacer cambios en mi tarjeta virtual?",
      contenido:
        "Claro, si necesitas hacer cambios en tu tarjeta virtual, contáctanos y con gusto haremos los cambios que requieras. Pero muy pronto podrás hacerlo desde tu “Portal Cliente” (en desarrollo).",
    },
    {
      pregunta: "- ¿Hay algún costo de mantenimiento de mi tarjeta digital?",
      contenido:
        "Sí, mantener tu tarjeta digital en línea requiere un conjunto de esfuerzos que representan costos. Para que tu tarjeta virtual se mantenga en línea, hay una cuota anual de mantenimiento de solo $50 MXN…mucho menos de lo que gastas en imprimir tarjetas de papel.",
    },
  ];

  return (
    <div className="my-10 mb-32" id="Preguntas">
      <div className="mx-auto my-0 w-full max-w-[1250px]">
        <div className="w-full flex flex-col justify-center items-center text-center my-0 mx-auto">
          <TituloSeccion
            className="my-0 mx-auto"
            text={"Preguntas frecuentes"}
          />
        </div>
        {arreglo.map((item, index) => (
          <ul
            className="flex flex-col items-start max-w-full mx-5 border-b-2 border-black py-6 my-6 md:mx-auto px-4 sm:px-6 lg:px-8"
            key={index}
          >
            <button
              className="flex justify-between items-center font-Georama text-2xl sm:text-2xl font-light text-left w-full"
              onClick={() => estado(index)}
            >
              {item.pregunta}
              {desplegar[index] ? (
                <img
                  className="w-5 h-5"
                  src="/images/landingPage/minus.svg"
                ></img>
              ) : (
                <img
                  className="w-5 h-5"
                  src="/images/landingPage/plus.svg"
                ></img>
              )}
            </button>

            {desplegar[index] && (
              <li className="list-inside h-auto w-full font-Georama py-6 text-lg sm:text-xl font-light text-wrap">
                {item.contenido}
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
