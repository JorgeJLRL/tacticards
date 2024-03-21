'use client'
import Styles from "../src/app/ui/button/button.module.css"
const Mensaje = () => {
    const handleSaveContact = () => {
      const vCard = `
  BEGIN:VCARD
  VERSION:3.0
  FN:John Doe
  TEL;TYPE=WORK,VOICE:+1234567890
  END:VCARD
      `;
      const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'JohnDoe.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div>
        <button className={Styles.boton} onClick={handleSaveContact}>Guardar contacto</button>
      </div>
    );
  };
  
  export default Mensaje;