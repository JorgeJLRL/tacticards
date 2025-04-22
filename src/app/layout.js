import "./globals.css";
import { montserrat } from "./ui/fonts";
import Footer from "../app/components/footer/footer";

import Menu from "../app/menu";
export const metadata = {
  title: "TáctiCards",
  description:
    "Impresiona a tus clientes potenciales con la nueva era en tarjetas de presentacion",
};

export default function RootLayout({ children }) {
  //layout todo el contorno de nuestra pagina

  return (
    <html lang="es">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Menu />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
