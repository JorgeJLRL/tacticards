import Image from "next/image";
import Contact from "./components/contact/contact.js";
import TI from "./components/LandingPage/TarjetasInteligentes.js";
import FT from "./components/LandingPage/funcionalidad.js";
import Background1 from "./components/LandingPage/background1";
import Background2 from "./components/LandingPage/background2";
import Escanear from "./components/LandingPage/Escanear.js";
import Background3 from "./components/LandingPage/background3.js";
import Preguntas from "./components/LandingPage/preguntas.js";
export default function Home() {
  return (
    <div>
      <TI></TI>
      <FT></FT>
      <Background1 />
      <Escanear></Escanear>
      <Background2></Background2>
      <Preguntas></Preguntas>
      <Background3></Background3>
      <Contact></Contact>
    </div>
  );
}
