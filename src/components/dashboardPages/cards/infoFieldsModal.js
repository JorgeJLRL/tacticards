import { Modal, Box, Button, Select, MenuItem } from "@mui/material";
import React from "react";

export default function InfoFieldModal({ openInfoModal, closeInfoModal, addField }) {
  const [valor, setValor] = React.useState("telefono-fijo");
  function handleChange(event) {
    setValor(event.target.value);
  }
  return (
    <Modal
      open={!!openInfoModal}
      onClose={closeInfoModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          minWidth: 400,
        }}
      >
        <h2 id="modal-modal-title" className="mb-4 text-center font-semibold">
          Nuevo campo de dato
        </h2>
        <Select value={valor} onChange={handleChange} fullWidth>
          <MenuItem value="telefono-fijo">Teléfono fijo</MenuItem>
          <MenuItem value="telefono-celular">Teléfono celular</MenuItem>
          <MenuItem value="ubicacion">Ubicación</MenuItem>
          <MenuItem value="correo-electronico">Correo electrónico</MenuItem>
          <MenuItem value="sitio-web">Sitio web</MenuItem>
        </Select>
        <div className="flex gap-4 justify-end mt-4">
          <Button onClick={closeInfoModal} sx={{ mt: 2, ml: 2 }}>
            Cerrar
          </Button>
          <Button onClick={() => addField(valor)} variant="contained" sx={{ mt: 2 }}>
            Agregar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
