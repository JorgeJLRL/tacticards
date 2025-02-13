"use client";
import React, { useState } from "react";

import Styles from "./../components/LandingPage/LandingPage.css";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const InputLogin =
    "w-full my-2 border-solid border-2 rounded-xl placeholder:text-black";
  //Este boton sirve para comunicarnos con el backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  return (
    <div className="bannertarjetas">
      <div className="w-full h-screen">
        <div className="w-[80%] h-[50%] rounded-2xl relative p-12 bg-white top-20 mx-auto my-0">
          <p className="text-3xl font-Nexa font-bold font-GothicSans text-center py-8">
            Portal Cliente TáctiCards
          </p>
          <div className="flex">
            <div className="mx-24 items-center w-full justify-center">
              <form>
                <input
                  className={InputLogin}
                  placeholder="Usuario o correo electronico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>

                <input
                  className={InputLogin}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button type="submit" onClick={handleSubmit}>
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
