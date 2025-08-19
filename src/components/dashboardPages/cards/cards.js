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
  const userId = useUserStore((state) => state.userId);
  const [searchState, setSearchState] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cardInfos/${userId}`);
        const data = await response.json();

        const normalizedData = data.map((card) => ({
          ...card,
          _id: card._id || card.id,
          redes: card.redes || [],
          extraInfoFields: card.extraInfoFields || [],
        }));

        setData(normalizedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userId]);

  const closeModal = () => setOpenModal(false);
  const closeModificarModal = () => setOpenModificarCardModal(false);

  function handleInputChange(event) {
    setSearchState(event.target.value);
  }

  const filteredCards = data.filter((card) =>
    (card.nombreTarjeta || "").toLowerCase().includes(searchState.toLowerCase())
  );

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
        />
      }
      <div className="flex justify-end mb-4">
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => setOpenModal(true)}>
          Nuevo
        </Button>
      </div>
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
            {filteredCards.map((card) => (
              <li key={card.id} className={styles.cardItem}>
                <img src={card.fotoPerfil} className={styles.cardFoto}></img>
                <div className={styles.cardItemInfo}>
                  <p className={styles.cardItemNombre}>{card.nombreTarjeta}</p>
                  <p>{card.puesto}</p>
                  <p>{card.empresa}</p>
                  <Link href={`/CardInfo?cardId=${card.id}`} className={styles.verTarjetaButton}>
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
        </React.Suspense>
      </div>
    </div>
  );
}
