'use client'
import { IoMenuOutline } from "react-icons/io5";
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Link from "next/link"
export default function Menu() {



    const [value, setValue] = useState(true)
    function toggleState() {
      setValue(!value)
        
    }
    

    return (
     
            <div className="HeaderBox">
                <div className="menuButton">
                    {value ? (<button onClick={toggleState}><IoMenuOutline /></button>) :(
                         <div>
                            <button onClick={toggleState}><IoMdClose /></button>
                            <div className="menuDisplayed">
                                <Link href="/"><h2 className="textMenu"><button onClick={toggleState}>Inicio</button></h2></Link>
                                <Link href="/#contactanos" prefetch={false}><h2 className="textMenu"><button onClick={toggleState}>Contacto</button></h2></Link>
                                
                            </div>
                         </div>
                    ) }
                </div>
                <div className="flex justify-center"><img src="/images/Logo.png" className="TacticardsLogoHeader"></img></div>
                <div></div>
            </div>
     
    )
}