"use client";
import { useState } from "react";
import styles from "../login/login.module.css";
import ConfirmModal from "../ui/modal/confirmModal";

export default function ReestablecerPage() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  function closeConfirmModal() {
    setConfirmModal(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== password) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const token = new URLSearchParams(window.location.search).get("token");

    const res = await fetch("https://api.tacticards.com.mx/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    if (res.ok) {
      setModalTitle("Contraseña reestablecida correctamente");
      setConfirmModal(true);
      window.location.href = "/login";
    } else {
      setModalTitle("Error al reestablecer la contraseña");
      setConfirmModal(true);
    }
  };

  return (
    <>
      <ConfirmModal open={confirmModal} closeModal={closeConfirmModal} title={modalTitle}></ConfirmModal>
      <div className="bannertarjetas">
        <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-neutral-200">
          <div className="w-[60%] h-[60%] rounded-2xl relative p-12 bg-white top-20 mx-auto my-0 max-xs:w-[90%]">
            <p className="text-3xl font-Nexa font-bold font-GothicSans text-center py-8 mb-10">
              Reestablecer Contraseña
            </p>
            <div className="items-center w-full justify-center flex flex-col max-xs:w-full">
              <form className="flex flex-col align-middle w-[60%] gap-6 max-xs:w-full" onSubmit={handleSubmit}>
                <input
                  type="password"
                  className={styles.inputText}
                  placeholder="Nueva Contraseña"
                  value={newPassword}
                  onChange={(e) => {
                    setError("");
                    setNewPassword(e.target.value);
                  }}
                  margin="normal"
                  required
                ></input>
                <input
                  className={styles.inputText}
                  placeholder="Repita su nueva contraseña"
                  value={password}
                  onChange={(e) => {
                    setError("");
                    setPassword(e.target.value);
                  }}
                  type="password"
                  margin="normal"
                  required
                ></input>
                {error ? <p className="text-center self-center text-red-500">{error}</p> : null}
                <button
                  type="submit"
                  variant="contained"
                  className="w-full rounded-2xl py-1 px-5 bg-cyan-500 text-white hover:bg-cyan-600"
                >
                  Reestablecer Contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
