import Image from "next/image";
import Contact from "./components/contact/contact.js"


export default function Home() {

  return (
    <div>
      <div className="imgBoxHome">

        <img src="/images/disenoTarjeta.png" className="imgHome"></img>
      </div>
      <div className="contentBoxHome">
        <div className="HomeText">
          <h2 className="mt-2 mb-1"><b>Tarjetas Inteligentes</b></h2>
          <p>Impresiona a tus clientes potenciales con la nueva era en tarjetas de presentacion</p>
          <h2 className="mt-4 mb-1"><b>Haz tu Pedido</b></h2>
          <p>¿Tienes alguna duda o deseas pedir una o más tarjetas? Envía mensaje y con gusto te atenderemos</p>
        </div>
        <Contact></Contact>
      
      </div>

    </div>
  );
}
