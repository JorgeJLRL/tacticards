'use client'

import styles from "./page.module.css";
import Mensaje from "../contact.client";
import React, { useEffect } from "react";
import EmptyRed from "../components/redes/emptyRed.js";
import { useSearchParams } from 'next/navigation'
export default function User() {
    const cardId = useSearchParams().get('cardId');
    const [card, setCard] = React.useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/cardInfos/card/${cardId}`);
                const data = await response.json();
                console.log(data)
                setCard(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, [cardId])

    const formatPhone = (phone) => {
        if (!phone) return "";
        const phoneArray = phone.split("");
        phoneArray.unshift("(");
        phoneArray.splice(4, 0, ")");
        phoneArray.splice(5, 0, " ");
        phoneArray.splice(9, 0, " ");
        return phoneArray.join("");
    }

    return (
        <div className={styles.imagebg}>
            <div className={styles.imageBoxBackground}>
                <img src={"/images/header.png"} className={styles.imageBackground} />
            </div>
            <img src={card.fotoPerfil} className={styles.userImg} />

            <div className={styles.contentBox}>
                <div className="flex justify-normal items-center flex-col">
                    <h2>{card.nombreTarjeta}</h2>
                    <p>{card.puesto}</p>
                </div>

                <ul className={styles.unorderedList}>
                    <li className={styles.listContact}>
                        <img src="/images/telephoneRad.png" />
                        <a className={styles.anchorText} href={`tel:${card.telefonoFijo}`}>
                            {formatPhone(card.telefonoFijo)}
                        </a>
                    </li>
                    <li className={styles.listContact}>
                        <img src="/images/MessageRad.png" />
                        <a className={styles.anchorText}>{card.direccionCorreo}</a>
                    </li>
                    <li className={styles.listContact}>
                        <img src="/images/worldRad.png" />
                        <a
                            className={styles.anchorText}
                            href={card.sitioWeb}
                            target="_blank"
                        >
                            {card.sitioWeb}
                        </a>
                    </li>
                    <li className={styles.listContact}>
                        <img src="/images/positionRad.png" />
                        <a className={styles.anchorText}>
                            {card.direccion}
                        </a>
                    </li>
                    <li className={styles.listContact}>
                        <img src="/images/cellphoneRad.png" />
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