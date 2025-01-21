import "./globals.css";
import { montserrat } from "./ui/fonts";
import Footer from "../app/components/footer/footer";

import Menu from "../app/menu";
export const metadata = {
  title: "Tacticards",
  description:
    "Impresiona a tus clientes potenciales con la nueva era en tarjetas de presentacion",
};

export default function RootLayout({ children }) {
  //layout todo el contorno de nuestra pagina

  return (
    <html>
      <body>
        <Menu />
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
