"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { useUserStore } from "./../../stores/userStore";
import { useRouter } from "next/navigation";
import EmailModal from "../CardInfo/emailModal";
import ConfirmModal from "../ui/modal/confirmModal";

export default function Login() {
  const setUserToken = useUserStore((state) => state.setUserToken);
  const setUserId = useUserStore((state) => state.setUserId);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function closeModal() {
    setOpen(false);
  }

  function closeConfirmModal() {
    setConfirmModal(false);
  }

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

  async function handleSendMail(email) {
    try {
      const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      if (res.ok) {
        setModalTitle("Correo enviado correctamente");
        setConfirmModal(true);
      } else {
        setModalTitle("Error al enviar el correo");
        setConfirmModal(true);
      }
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    <>
      <EmailModal
        open={open}
        closeModal={closeModal}
        sendMail={handleSendMail}
        title={"Olvidaste tu contraseña?"}
        text={"Escriba su email:"}
      ></EmailModal>
      <ConfirmModal open={confirmModal} closeModal={closeConfirmModal} title={modalTitle}></ConfirmModal>
      <div className="bannertarjetas">
        <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-neutral-200">
          <div className="w-[60%] h-[60%] rounded-2xl relative p-12 bg-white top-20 mx-auto my-0 max-xs:w-[90%]">
            <p className="text-3xl font-Nexa font-bold font-GothicSans text-center py-8 mb-10">
              Portal Cliente TáctiCards
            </p>
            <div className="items-center w-full justify-center flex flex-col max-xs:w-full">
              <form className="flex flex-col align-middle w-[60%] gap-6 max-xs:w-full">
                <input
                  type="email"
                  className={styles.inputText}
                  placeholder="Correo Electronico"
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
                <button
                  type="submit"
                  variant="contained"
                  className="w-full rounded-2xl py-1 px-5 bg-cyan-500 text-white mt-4 hover:bg-cyan-600"
                  onClick={handleSubmit}
                >
                  Entrar
                </button>
                <button
                  type="submit"
                  variant="contained"
                  className="w-full rounded-2xl py-1 px-5 bg-gray-500 text-white hover:bg-gray-600"
                  onClick={() => setOpen(true)}
                >
                  Olvidé mi contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
