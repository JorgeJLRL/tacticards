"use client";

import Styles from "../../ui/button/button.module.css";

const Mensaje = () => {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:M.F. Jorge Alberto Orduño Ahumada
TEL;TYPE=WORK,VOICE:6682173047
EMAIL:jaorduno@ubisat.com.mx



END:VCARD`;

    try {
      const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Jorge Alberto Orduño Ahumada.vcf");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup the object URL after use
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading contact:", error);
      alert("Error downloading contact. Please try again.");
    }
  };

  return (
    <div>
      <button className={Styles.boton} onClick={handleSaveContact}>
        Guardar contacto
      </button>
    </div>
  );
};

export default Mensaje;
