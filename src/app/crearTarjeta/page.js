"use client";
import { stringify } from "querystring";
import React from "react";
import { useState } from "react";

export default function Page() {
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [puesto, setPuesto] = useState("");
  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      puesto: puesto,
      nombreTarjeta: nombreTarjeta,
    };

    try {
      const response = await fetch("https://api.tacticards.com.mx/api/cardInfos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("error al crear tarjeta");
    }
  }; */
  const InputLogin = "w-full my-2 border-solid border-2 rounded-xl placeholder:text-black";

  return (
    <div>
      {/* {<form>
        <input
          className={InputLogin}
          placeholder="Nombre"
          value={nombreTarjeta}
          onChange={(e) => setNombreTarjeta(e.target.value)}
        ></input>

        <input
          className={InputLogin}
          placeholder="Contraseña"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
        ></input>

        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>} */}
    </div>
  );
}
