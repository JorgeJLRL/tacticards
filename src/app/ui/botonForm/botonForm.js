import Style from "../botonForm/botonForm.module.css"

export default function BotonForm ({text}){
    return(
    
    <button className={Style.boton}>{text}</button>
    
    )
}

 