"use client";

import Styles from "../../ui/button/button.module.css";




const Mensaje = () => {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Lic Elena Bonilla
TEL;TYPE=WORK,VOICE:311 740 61 82
EMAIL:juridicos_bonilla@hotmail.com


END:VCARD`;

    try {
      const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Lic Elena Bonilla.vcf");
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
