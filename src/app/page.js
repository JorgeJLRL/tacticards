import Image from "next/image";
import Contact from "./components/contact/contact.js"

export default function Home() {
  return (
    <div>

      <img src="../images/Diseño de tarjeta de presentación digital TáctiCards 3-12.png" className="imgHome"></img>
      <div className="HomeText">
        <h2>Tarjetas Inteligentes</h2>
        <p>Impresiona a tus clientes potenciales con la nueva era en tarjetas de presentacion</p>
        <h2>Haz tu pedido</h2>
        <p>¿tienes alguna duda o deseas pedir una o màs tarjetas? Envìa mensaje y con gusto te atenderemos</p>

      </div>
      <Contact></Contact>

    </div>
  );
}
