"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const inputFields = [
  { label: "Nombre de la tarjeta", propertyName: "nombreTarjeta" },
  { label: "Puesto", propertyName: "puesto" },
  { label: "Teléfono fijo", propertyName: "telefonoFijo" },
  { label: "Teléfono móvil", propertyName: "telefonoMovil" },
  { label: "Dirección", propertyName: "direccion" },
  { label: "Dirección de correo", propertyName: "direccionCorreo" },
  { label: "Sitio web", propertyName: "sitioWeb" },
  { label: "Facebook", propertyName: "facebook" },
  { label: "Instagram", propertyName: "instagram" },
  { label: "LinkedIn", propertyName: "linkedIn" },
  { label: "Ubicación", propertyName: "ubicacion" },
  { label: "WhatsApp Business", propertyName: "whatsappBusiness" },
];

const emptyFormValues = inputFields.reduce((acc, field) => ({ ...acc, [field.propertyName]: "" }), {
  fotoPerfil: "",
  fotoPortada: "",
});

export default function CardsModal({ openModal, closeModal, addCard }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState(emptyFormValues);
  const [extraSocialFields, setExtraSocialFields] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setExtraSocialFields([]);
    setOpen(false);
    closeModal();
    setFormValues(emptyFormValues);
  };

  React.useEffect(() => {
    if (openModal) {
      handleOpen();
    }
  }, [openModal]);

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (type === "fotoPerfil") {
        setFormValues({ ...formValues, fotoPerfil: event.target.result });
      } else {
        setFormValues({ ...formValues, fotoPortada: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const sendForm = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/cardInfos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formValues, redesExtra: extraSocialFields, user: localStorage.getItem("userId") }),
      });
      const data = await response.json();
      addCard(data.data);
      setIsLoading(false);
      console.log(data);
      setFormValues(emptyFormValues);
      setExtraSocialFields([]);
      setOpen(false);
      closeModal();
    } catch (error) {
      console.error("Error sending form data:", error);
      setIsLoading(false);
    }
  };

  const handleAddSocialField = () => {
    setExtraSocialFields((prev) => [
      ...prev,
      {
        id: `red-${prev.length + 1}`,
        iconoRed: "",
        linkRed: "",
        nombreRed: "",
      },
    ]);
  };

  const handleChangeSocialField = (id, field, value) => {
    setExtraSocialFields((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleImageChangeExtra = (e, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      handleChangeSocialField(id, "iconoRed", event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => handleImageChange(e, "fotoPerfil")}
                  label="Foto de perfil"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ accept: "image/*" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => handleImageChange(e, "fotoPortada")}
                  label="Foto de portada"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ accept: "image/*" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ paddingBottom: "0.5rem" }}>
              {inputFields.map((field) => (
                <Grid item xs={6} key={field.propertyName}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label={field.label}
                    variant="standard"
                    name={field.propertyName}
                    onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                    value={formValues[field.propertyName]}
                  />
                </Grid>
              ))}
              <hr style={{ margin: "0 auto", backgroundColor: "gray", height: "1.5px", width: "100%" }}></hr>
            </Grid>
            <Grid container spacing={2} sx={{ alignItems: "end", paddingTop: "0.5rem" }}>
              {extraSocialFields.map((field, i) => (
                <React.Fragment key={field.id}>
                  <Grid item xs={6}>
                    <input
                      accept="image/*"
                      type="file"
                      id={`upload-red-${field.id}`}
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChangeExtra(e, field.id)}
                    />
                    <label htmlFor={`upload-red-${field.id}`}>
                      <Button variant="outlined" component="span" fullWidth sx={{ textTransform: "none" }}>
                        {field.iconoRed ? "Cambiar icono" : "Subir icono de red"}
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label="Nombre red"
                      variant="standard"
                      value={field.nombreRed}
                      onChange={(e) => handleChangeSocialField(field.id, "nombreRed", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label="Link"
                      variant="standard"
                      value={field.linkRed}
                      onChange={(e) => handleChangeSocialField(field.id, "linkRed", e.target.value)}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <Button onClick={handleAddSocialField} variant="outlined" sx={{ mt: 2 }}>
              Agregar red social
            </Button>
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={sendForm} disabled={isLoading}>
                {isLoading ? "Enviando..." : "Guardar"}
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
