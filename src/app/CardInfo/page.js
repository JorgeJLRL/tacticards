"use client";

import styles from "./page.module.css";
import Mensaje from "../contact.client";
import React, { Suspense, useEffect } from "react";
import EmptyRed from "../components/redes/emptyRed.js";
import { useSearchParams } from "next/navigation";
export default function User() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CardInfoClient></CardInfoClient>
    </Suspense>
  );
}
function CardInfoClient() {
  const cardId = useSearchParams().get("cardId");
  const [card, setCard] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cardInfos/card/${cardId}`);
        const data = await response.json();
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

  function formatHref(field) {
    if (!field?.value) return "#";

    // 📞 Teléfono
    if (field.name.startsWith("telefono")) {
      return `tel:${field.value}`;
    }

    // 📧 Email
    if (field.name.startsWith("email")) {
      return field.value.startsWith("mailto:") ? field.value : `mailto:${field.value}`;
    }

    // 🌐 Sitio web
    if (field.name.startsWith("web") || field.name.startsWith("sitio") || field.name.startsWith("ubicacion")) {
      if (field.value.startsWith("http://") || field.value.startsWith("https://")) {
        return field.value;
      }
      return `https://${field.value}`;
    }

    // 🔗 Por defecto lo tratamos como URL
    return field.value;
  }

  return (
    <div className={styles.imagebg}>
      <div className={styles.imageBoxBackground}>
        <img src={card.fotoPortada} className={styles.imageBackground} />
      </div>

      <div className={styles.contentBox}>
        <div className={styles.mainInfoContainer}>
          <div className={styles.userImgWrapper}>
            <img src={card.fotoPerfil} className={styles.userImg} />
          </div>
          <div className={styles.infoContact}>
            <div className={styles.nombreCard}>
              <h2>{card.nombreTarjeta}</h2>
              {card.empresa ? <p>{card.empresa}</p> : null}
              <p>{card.puesto}</p>
            </div>
            <ul className={styles.unorderedList}>
              <li className={styles.listContact}>
                <img src="/images/iconodetelefono.png" style={{ width: "21px", height: "21px" }} />
                <a className={styles.anchorText} href={`tel:${card.telefonoFijo}`}>
                  {formatPhone(card.telefonoFijo)}
                </a>
              </li>
              <li className={styles.listContact}>
                <img src="/images/iconodecorreo.png" style={{ width: "21px", height: "21px" }} />
                <a className={styles.anchorText} href={`mailto:${card.direccionCorreo}`}>
                  {card.direccionCorreo}
                </a>
              </li>
              <li className={styles.listContact}>
                <img src="/images/iconodesitioweb.png" style={{ width: "21px", height: "21px" }} />
                <a className={styles.anchorText} href={card.sitioWeb} target="_blank">
                  {card.sitioWeb}
                </a>
              </li>
              <li className={styles.listContact}>
                <img src="/images/iconodeubicacion.png" style={{ width: "21px", height: "21px" }} />
                <a className={styles.anchorText}>{card.direccion}</a>
              </li>
              <li className={styles.listContact}>
                <img src="/images/iconodecelular.png" style={{ width: "21px", height: "21px" }} />
                <a className={styles.anchorText} href={`tel:${card.telefonoMovil}`}>
                  {formatPhone(card.telefonoMovil)}
                </a>
              </li>
              {card.extraInfoFields?.map((field) => {
                return (
                  <li className={styles.listContact} key={field.id}>
                    <img src={`/images/${field.name}.png`} style={{ width: "21px", height: "21px" }} />
                    <a className={styles.anchorText} href={formatHref(field)}>
                      {field.name.startsWith("telefono") ? formatPhone(field.value) : field.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.guardarContacto}>
          <Mensaje title={" Guardar a tus contactos"}></Mensaje>
          <Mensaje title={" Enviar contacto a tu E-Mail"}></Mensaje>
        </div>

        <EmptyRed card={card}></EmptyRed>
      </div>
    </div>
  );
}
