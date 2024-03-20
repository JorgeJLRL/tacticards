'use client'
import { IoMenuOutline } from "react-icons/io5";
import React, { useState } from 'react'
export default function Menu() {



    const [value, setValue] = useState(0)
    function toggleState() {

        setValue(1)
        console.log(value)
    }

    return (
     
            <div className="HeaderBox">
                <div className="menuButton">
                    <button onClick={toggleState}><IoMenuOutline /></button>
                </div>
                <div className="flex justify-center"><img src="../images/Logo.png" className="TacticardsLogoHeader"></img></div>
                
            </div>
     
    )
}