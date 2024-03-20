"use client";
import "./contact.module.css"
import { useState } from 'react'
import emailjs from 'emailjs-com';
import Style from "../contact/contact.module.css"
import BotonForm from "../../ui/botonForm/botonForm"


function Contactanos() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");


    const send = () => {
        const objetoFormulario = {
            nombre, telefono, email, mensaje
        }
        emailjs.send('service_uyeuldl', 'template_th1deaj', objetoFormulario, 'MaJhlLWAUOOw66FNB').then(res => {
            console.log(res);
        })
    }


    return (
    <div className={Style.contactField} >
        
        <div className={Style.formInputContent} id="contactanos">


            <div className={Style.form__field}>
                
                <input type="input" className={Style.form__field} placeholder="Nombre" name="Nombre" id='Nombre' required onChange={(e) => { setNombre(e.target.value) }}/>


                <input type="input" className={Style.form__field} placeholder="Correo" name="Correo" id='Correo' required onChange={(e) => { setEmail(e.target.value) }} />
            

                <input type="input" className={Style.form__field} placeholder="Telefono" name="Telefono" id='Telefono' required onChange={(e) => { setTelefono(e.target.value) }} />


                <input type="input" className={Style.form__field} placeholder="Mensaje" name="Mensaje" id='Mensaje' required onChange={(e) => { setMensaje(e.target.value) }} />


                <div className={Style.wrapSend}>

                    <BotonForm className={Style.buttonSend} type="submit" variant="contained" onClick={send} text={"Enviar"}></BotonForm>
                </div>

            </div>
    
        </div>
    </div>
    );
}


export default Contactanos;