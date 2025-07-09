"use client";

import styles from "./page.module.css";
import Mensaje from "../contact.client";
import React, { useEffect } from "react";
import EmptyRed from "../components/redes/emptyRed.js";
import { useSearchParams } from "next/navigation";
export default function User() {
  const cardId = useSearchParams().get("cardId");
  const [card, setCard] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cardInfos/card/${cardId}`);
        const data = await response.json();
        //console.log(data);
        setCard(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cardId]);

  const formatPhone = (phone) => {
    if (!phone) return "";
    const phoneArray = phone.split("");
    phoneArray.unshift("(");
    phoneArray.splice(4, 0, ")");
    phoneArray.splice(5, 0, " ");
    phoneArray.splice(9, 0, " ");
    return phoneArray.join("");
  };

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img src={card.fotoPortada} className={styles.imageBackground} style={{ width: "1200px", height: "435px" }} />
      </div>
      <img src={card.fotoPerfil} className={styles.userImg} />

      <div className={styles.contentBox}>
        <div className="flex justify-normal items-center flex-col">
          <h2>{card.nombreTarjeta}</h2>
          <p>{card.puesto}</p>
        </div>

        <ul className={styles.unorderedList}>
          <li className={styles.listContact}>
            <img src="/images/iconodetelefono.png" style={{ width: "31px", height: "31px" }} />
            <a className={styles.anchorText} href={`tel:${card.telefonoFijo}`}>
              {formatPhone(card.telefonoFijo)}
            </a>
          </li>
          <li className={styles.listContact}>
            <img src="/images/iconodecorreo.png" style={{ width: "31px", height: "31px" }} />
            <a className={styles.anchorText} href={`mailto:${card.direccionCorreo}`}>
              {card.direccionCorreo}
            </a>
          </li>
          <li className={styles.listContact}>
            <img src="/images/iconodesitioweb.png" style={{ width: "31px", height: "31px" }} />
            <a className={styles.anchorText} href={card.sitioWeb} target="_blank">
              {card.sitioWeb}
            </a>
          </li>
          <li className={styles.listContact}>
            <img src="/images/iconodeubicacion.png" style={{ width: "31px", height: "31px" }} />
            <a className={styles.anchorText}>{card.direccion}</a>
          </li>
          <li className={styles.listContact}>
            <img src="/images/iconodecelular.png" style={{ width: "31px", height: "31px" }} />
            <a className={styles.anchorText} href={`tel:${card.telefonoMovil}`}>
              {formatPhone(card.telefonoMovil)}
            </a>
          </li>
        </ul>

        <Mensaje></Mensaje>

        <EmptyRed card={card}></EmptyRed>
      </div>
    </div>
  );
}
