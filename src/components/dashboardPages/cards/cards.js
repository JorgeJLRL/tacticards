"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CardsModal from "./modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUserStore } from "./../../../stores/userStore";

const columns = [
  { label: "Nombre de la tarjeta", propertyName: "nombreTarjeta" },
  { label: "Puesto", propertyName: "puesto" },
  { label: "Teléfono fijo", propertyName: "telefonoFijo" },
  { label: "Teléfono móvil", propertyName: "telefonoMovil" },
  { label: "Dirección", propertyName: "direccion" },
  { label: "Dirección de correo", propertyName: "direccionCorreo" },
  { label: "Sitio web", propertyName: "sitioWeb" },
  { label: "Ver Tarjeta", propertyName: "verTarjeta" },
];

export default function Cards() {
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState([]);
  const userId = useUserStore((state) => state.userId);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cardInfos/${userId}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userId]);

  const closeModal = () => setOpenModal(false);

  const addCard = (card) => {
    setData([...data, card]);
  };

  return (
    <div className="p-4">
      <CardsModal openModal={openModal} closeModal={closeModal} addCard={addCard} />
      <div className="flex justify-end mb-4">
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => setOpenModal(true)}>
          Nuevo
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.propertyName} style={{ fontWeight: "bold" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {columns.map((column) => (
                  <TableCell key={column.propertyName} align="left">
                    {column.propertyName === "verTarjeta" ? (
                      <a href={`/CardInfo?cardId=${row.id}`}>Ver tarjeta</a>
                    ) : (
                      row[column.propertyName]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
