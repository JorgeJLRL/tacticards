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
          <h2>Tarjetas Inteligentes</h2>
          <p>Impresiona a tus clientes potenciales con la nueva era en tarjetas de presentacion</p>
          <h2>Haz tu pedido</h2>
          <p>¿tienes alguna duda o deseas pedir una o màs tarjetas? Envìa mensaje y con gusto te atenderemos</p>
        </div>
        <Contact></Contact>
      
      </div>

    </div>
  );
}
