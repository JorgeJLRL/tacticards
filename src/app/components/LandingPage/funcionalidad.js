import TituloSeccion from "./TituloSeccion";

export default function FuncionalidadTarjetas() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex-col relative flex justify-center  ">
        <div className="w-full flex flex-col justify-center items-center my-0 mx-auto">
          <TituloSeccion text="¿Cómo funcionan?"></TituloSeccion>
          <div className="flex h-auto w-full p-6">
            <div className="w-[1200px] flex my-0 mx-auto align-middle justify-center">
              <div className="flex-col flex items-center justify-center ">
                <p className="text-xl">
                  Tu TáctiCard puede ser portada como un gafet de identificación
                  normal, pero al escanearse, se abrirá tu{" "}
                  <b>tarjeta de presentación virtual.</b>
                </p>
                <br />
                <p className="text-xl">
                  Tus clientes podrán ver tus datos, guardar tu contacto a su
                  teléfono, acceder a tus redes sociales y mucho más; todo de
                  manera rápida, sencilla y realmente impresionante.
                </p>
              </div>
              <div>
                <img
                  src="/images/landingPage/CelularTarjetas.webp"
                  alt="Celular con tarjeta"
                  className="h-[400px] w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
