"use client";

import styles from "./page.module.css";
import Mensaje from "../contact.client";
import React, { Suspense, useEffect } from "react";
import EmptyRed from "../components/redes/emptyRed.js";
import { useSearchParams } from "next/navigation";
import EmailModal from "./emailModal";
import ConfirmModal from "../ui/modal/confirmModal";
export default function User() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CardInfoClient></CardInfoClient>
    </Suspense>
  );
}
function CardInfoClient() {
  const cardId = useSearchParams().get("cardId");
  const [openModal, setOpenModal] = React.useState(false);
  const [confirmModal, setConfirmModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  function closeConfirmModal() {
    setConfirmModal(false);
  }
  function closeModal() {
    setOpenModal(false);
  }
  const [card, setCard] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tacticards.com.mx/api/cardInfos/card/${cardId}`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cardId]);

  async function sendMail(mail) {
    try {
      const res = await fetch("https://api.tacticards.com.mx/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: mail,
          subject: `Tarjeta de presentación digital de ${card.nombreTarjeta}`,
          text: `Has recibido la tarjeta de ${card.nombreTarjeta}. Abre la tarjeta en el enlace: ${window.location.href}`,
          html: `
          <p>Has recibido la tarjeta de <strong>${card.nombreTarjeta}</strong>.</p>
          <p>Para abrirla, haz clic en el siguiente botón:</p>
          <a href="${window.location.href}" style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #003458;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          ">Abrir tarjeta</a>
        `,
        }),
      });

      if (res.ok) {
        setModalTitle("Correo enviado correctamente");
        setConfirmModal(true);
      } else {
        setModalTitle("Error al enviar el correo");
        setConfirmModal(true);
      }
    } catch (error) {
      console.error("Error al enviar correo:", error);
      alert("Error al conectar con el servidor ❌");
    }
  }

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
    <>
      <EmailModal
        open={openModal}
        closeModal={closeModal}
        sendMail={sendMail}
        title={"Enviar contacto a un correo"}
        text={"Envía la información de este contacto al siguiente correo:"}
      />
      <ConfirmModal open={confirmModal} closeModal={closeConfirmModal} title={modalTitle}></ConfirmModal>
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
                {card.nombreTarjeta?.trim() !== "" ? <h2>{card.nombreTarjeta}</h2> : null}
                {card.empresa && card.empresa?.trim() !== "" ? <p>{card.empresa}</p> : null}
                {card.puesto && card.puesto?.trim() !== "" ? <p>{card.puesto}</p> : null}
              </div>
              <ul className={styles.unorderedList}>
                {card.telefonoFijo?.trim() !== "" ? (
                  <li className={styles.listContact}>
                    <img src="/images/iconodetelefono.png" style={{ width: "21px", height: "21px" }} />
                    <a className={styles.anchorText} href={`tel:${card.telefonoFijo}`}>
                      {formatPhone(card.telefonoFijo)}
                    </a>
                  </li>
                ) : null}
                {card.direccionCorreo?.trim() !== "" ? (
                  <li className={styles.listContact}>
                    <img src="/images/iconodecorreo.png" style={{ width: "21px", height: "21px" }} />
                    <a className={styles.anchorText} href={`mailto:${card.direccionCorreo}`}>
                      {card.direccionCorreo}
                    </a>
                  </li>
                ) : null}
                {card.sitioWeb?.trim() !== "" ? (
                  <li className={styles.listContact}>
                    <img src="/images/iconodesitioweb.png" style={{ width: "21px", height: "21px" }} />
                    <a
                      className={styles.anchorText}
                      href={
                        card.sitioWeb?.startsWith("http://") || card.sitioWeb?.startsWith("https://")
                          ? card.sitioWeb
                          : `https://${card.sitioWeb}`
                      }
                      target="_blank"
                    >
                      {card.sitioWeb}
                    </a>
                  </li>
                ) : null}
                {card.direccion?.trim() !== "" ? (
                  <li className={styles.listContact}>
                    <img src="/images/iconodeubicacion.png" style={{ width: "21px", height: "21px" }} />
                    <a className={styles.anchorText}>{card.direccion}</a>
                  </li>
                ) : null}
                {card.telefonoMovil?.trim() !== "" ? (
                  <li className={styles.listContact}>
                    <img src="/images/iconodecelular.png" style={{ width: "21px", height: "21px" }} />
                    <a className={styles.anchorText} href={`tel:${card.telefonoMovil}`}>
                      {formatPhone(card.telefonoMovil)}
                    </a>
                  </li>
                ) : null}
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
            <button
              className="bg-gradient-to-b from-[#003458] to-[#0098ff] text-white rounded-md py-2 w-[450px] mt-2 mb-2 text-2xl"
              onClick={() => setOpenModal(true)}
            >
              Enviar contacto a tu E-Mail
            </button>
          </div>

          <EmptyRed card={card}></EmptyRed>
        </div>
      </div>
    </>
  );
}
