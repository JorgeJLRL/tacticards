"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { useUserStore } from "./../../stores/userStore";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const setUserToken = useUserStore((state) => state.setUserToken);
  const setUserId = useUserStore((state) => state.setUserId);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const InputLogin = "w-full border-solid border-2 rounded-xl placeholder:text-black";
  //Este boton sirve para comunicarnos con el backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userData.id);
      localStorage.setItem("nombre", response.data.userData.name);
      localStorage.setItem("correo", response.data.userData.email);
      setUserToken(response.data.token);
      setUserId(response.data.userData.id);
      setEmail("");
      setPassword("");

      router.push("/dashboard/cards");
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  return (
    <div className="bannertarjetas">
      <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-neutral-200">
        <div className="w-[60%] h-[60%] rounded-2xl relative p-12 bg-white top-20 mx-auto my-0">
          <p className="text-3xl font-Nexa font-bold font-GothicSans text-center py-8 mb-10">
            Portal Cliente TáctiCards
          </p>
          <div className="items-center w-full justify-center flex flex-col">
            <form className={styles.formContainer}>
              <input
                type="email"
                className={styles.inputText}
                placeholder="Usuario o correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              ></input>
              <input
                className={styles.inputText}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                margin="normal"
                required
              ></input>
              <button type="submit" variant="contained" className={styles.formButton} onClick={handleSubmit}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
