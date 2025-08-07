// src/app/dashboard/page.js
"use client";
import React, { useEffect, useState } from "react";
import { useUserStore } from "./../../../stores/userStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

function DashboardContainer({ content }) {
  const setUserToken = useUserStore((state) => state.setUserToken);
  const setUserId = useUserStore((state) => state.setUserId);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const router = useRouter();
  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    const storageUserId = localStorage.getItem("userId");
    const nombreUsuario = localStorage.getItem("nombre");
    const correoUsuario = localStorage.getItem("correo");

    if (storageToken) {
      setUserToken(storageToken);
    }
    if (storageUserId) {
      setUserId(storageUserId);
    }
    if (nombreUsuario) {
      setNombre(nombreUsuario);
    }
    if (correoUsuario) {
      setCorreo(correoUsuario);
    }
  });

  function handleLogout() {
    // Redireccionar a home page
    router.push("/");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }

  return (
    <div className="h-screen">
      <div className="bg-white p-4 shadow-md w-full flex justify-between">
        <div>
          <h2 className="text-lg font-bold">Bienvenido, {nombre ? nombre : "John Doe"}</h2>
          <p className="text-gray-600">{correo}</p>
        </div>
        <button
          onClick={handleLogout}
          className="p-4 rounded-md border bg-white border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"
        >
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-79.5px)]">
        {/* Menu */}
        <div className="bg-gray-800 text-white w-64 p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-2 ml-3">
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li className="mb-2 ml-3">
              <Link href="/dashboard/cards" className="text-gray-300 hover:text-white">
                TactiCards
              </Link>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-b from-sky-100 to-neutral-200">{content}</div>
      </div>
    </div>
  );
}

export default DashboardContainer;
