import TituloSeccion from "./TituloSeccion";

export default function FuncionalidadTarjetas() {
  return (
    <div className="w-full mt-[350px] lg:mt-0 xl:mt-0 xxl:mt-0 md:mt-0">
      <div className="w-full h-full flex-col relative flex justify-center  ">
        <div className="w-full flex flex-col justify-center items-center my-0 mx-auto">
          <TituloSeccion text="¿Cómo funcionan?"></TituloSeccion>
          <div className="flex h-auto w-full p-6">
            <div className="w-[1200px] flex md:flex-row flex-col-reverse my-0 mx-auto items-center justify-center">
              <div className="flex-col md:flex-col flex items-center justify-center ">
                <p className="text-3xl md:my-2 my-3">
                  Tu TáctiCard puede ser portada como un gafet de identificación
                  normal, pero al escanearse, se abrirá tu{" "}
                  <b>tarjeta de presentación virtual.</b>
                </p>
                <br />
                <p className="text-3xl md:my-2 my-3">
                  Tus clientes podrán ver tus datos, guardar tu contacto a su
                  teléfono, acceder a tus redes sociales y mucho más; todo de
                  manera rápida, sencilla y realmente impresionante.
                </p>
              </div>
              <div>
                <img
                  src="/images/landingPage/CelularTarjetas.webp"
                  alt="Celular con tarjeta"
                  className="md:h-[400px] md:w-[500px] h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
