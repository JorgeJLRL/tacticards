"use client";

import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CardsModal from "./modal";
import { useUserStore } from "./../../../stores/userStore";
import styles from "./cards.module.css";
import Link from "next/link";
import ModificarCardModal from "./modificarCardModal";

/* const columns = [
  { label: "Nombre de la tarjeta", propertyName: "nombreTarjeta" },
  { label: "Puesto", propertyName: "puesto" },
  { label: "Teléfono fijo", propertyName: "telefonoFijo" },
  { label: "Teléfono móvil", propertyName: "telefonoMovil" },
  { label: "Dirección", propertyName: "direccion" },
  { label: "Dirección de correo", propertyName: "direccionCorreo" },
  { label: "Sitio web", propertyName: "sitioWeb" },
  { label: "Ver Tarjeta", propertyName: "verTarjeta" },
]; */

export default function Cards() {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModificarCardModal, setOpenModificarCardModal] = React.useState(false);
  const [cardData, setCardData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(6); // Número de tarjetas por página
  const userId = useUserStore((state) => state.userId);
  const [searchState, setSearchState] = React.useState("");

  React.useEffect(() => {
    async function getUserAndCards() {
      try {
        if (!userId) return;
        const token = localStorage.getItem("token");

        // 1. primero obtener userData
        const userRes = await fetch(`https://api.tacticards.com.mx/api/users/getUserById/${userId}`, {
          headers: {
            Authorization: token,
          },
        });
        const userData = await userRes.json();
        setIsAdmin(userData.isAdmin);

        // 2. luego obtener las cards según si es admin o no
        const cardsRes = await fetch(
          userData.isAdmin
            ? `https://api.tacticards.com.mx/api/cardInfos/all`
            : `https://api.tacticards.com.mx/api/cardInfos/${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const cardsData = await cardsRes.json();

        const normalizedData = cardsData.map((card) => ({
          ...card,
          _id: card._id || card.id,
          redes: card.redes || [],
          extraInfoFields: card.extraInfoFields || [],
        }));

        setData(normalizedData);
      } catch (error) {
        console.error("Error fetching user/cards:", error);
      }
    }

    getUserAndCards();
  }, [userId]);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 450) {
        setLimit(3);
      } else {
        setLimit(6);
      }
    }

    // correr al inicio
    handleResize();

    // escuchar cambios de tamaño
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeModal = () => setOpenModal(false);
  const closeModificarModal = () => setOpenModificarCardModal(false);

  function handleInputChange(event) {
    setSearchState(event.target.value);
    setPage(1); // Resetear a la primera página al cambiar el filtro
  }

  const filteredCards = data.filter((card) =>
    (card.nombreTarjeta || "").toLowerCase().includes(searchState.toLowerCase())
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCards = filteredCards.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCards.length / limit);

  const addCard = (card) => {
    setData([...data, card]);
  };
  const updateCard = (updatedCard) => {
    setData((prevCards) => prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
  };

  return (
    <div className="p-4">
      <CardsModal openModal={openModal} closeModal={closeModal} addCard={addCard} />
      {
        <ModificarCardModal
          openModal={openModificarCardModal}
          closeModal={closeModificarModal}
          updateCard={updateCard}
          cardData={cardData}
          isAdmin={isAdmin}
        />
      }
      {isAdmin ? (
        <div className="flex justify-end mb-4">
          <Button variant="contained" endIcon={<AddIcon />} onClick={() => setOpenModal(true)}>
            Nuevo
          </Button>
        </div>
      ) : null}
      <div className={styles.dashboardCards}>
        <h2 className={styles.cardsTitle}>Mis Tarjetas</h2>
        <input
          type="search"
          placeholder="Nombre de Tarjeta"
          className={styles.inputSearchCard}
          onChange={handleInputChange}
          value={searchState}
        />
        <React.Suspense fallback={<p>Cargando...</p>}>
          <div className={styles.cardsContainer}>
            {paginatedCards.map((card) => (
              <li key={card.id} className={styles.cardItem}>
                <img src={card.fotoPerfil} className={styles.cardFoto}></img>
                <div className={styles.cardItemInfo}>
                  <p className={styles.cardItemNombre}>{card.nombreTarjeta}</p>
                  <p>{card.puesto}</p>
                  <p>{card.empresa}</p>
                  <Link
                    href={`/CardInfo?cardId=${card.id}`}
                    className={styles.verTarjetaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {/* antes era card._id */}
                    <p>Ver Tarjeta</p>
                    <img src="/images/eye-solid-full.svg" style={{ width: "21px", height: "21px" }}></img>
                  </Link>
                  <button
                    className={styles.verTarjetaButton}
                    onClick={() => {
                      setCardData(card); // ya tiene _id
                      setOpenModificarCardModal(true);
                    }}
                  >
                    <p>Editar Tarjeta</p>
                    <img src="/images/pencil-solid-full.svg" style={{ width: "21px", height: "21px" }}></img>
                  </button>
                </div>
              </li>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 w-full align-middle">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 border-sky-300 hover:bg-sky-100 bg-sky-300 cursor-pointer"
            >
              Anterior
            </button>

            <span>
              Página {page} de {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50  border-sky-300 hover:bg-sky-100 bg-sky-300 cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </React.Suspense>
      </div>
    </div>
  );
}
