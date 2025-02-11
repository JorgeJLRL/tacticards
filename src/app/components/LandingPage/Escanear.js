import TituloSeccion from "./TituloSeccion";
export default function Escanear() {
  return (
    <div className="">
      <div className="w-full h-full flex-col relative flex justify-center  ">
        <div className="w-full flex flex-col justify-center items-center my-0 mx-auto">
          <TituloSeccion text="¿Cómo escanear mi TáctiCard?"></TituloSeccion>
          <div className="flex flex-row-reverse h-auto w-[1200px]">
            <div className="flex-col flex align-middle justify-center">
              <p className="text-xl">
                Tu TáctiCard puede escanearse con un smartphone de dos maneras:
              </p>
              <br />
              <ul>
                <li>
                  <b>Proximidad</b>: Con la tecnología NFC, al acercar la
                  tarjeta/gafet al smartphone, se abrirá la tarjeta virtual.
                </li>
                <li>
                  <b>Código QR</b>: Tu Tácticard puede tener impreso un código
                  QR que dirija a tus clientes a tu tarjeta virtual.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/landingPage/GafetEmpresarialInteligente.webp"
                alt="Celular con tarjeta"
                className="h-[400px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
