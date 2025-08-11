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
  { label: "Nombre", propertyName: "nombreTarjeta" },
  { label: "Puesto", propertyName: "puesto" },
  { label: "Empresa", propertyName: "empresa" },
  { label: "Teléfono fijo", propertyName: "telefonoFijo" },
  { label: "Teléfono celular", propertyName: "telefonoMovil" },
  { label: "Dirección", propertyName: "direccion" },
  { label: "Correo electrónico", propertyName: "direccionCorreo" },
  { label: "Sitio web", propertyName: "sitioWeb" },
];

const socialFields = [
  { label: "Facebook", propertyName: "facebook" },
  { label: "Instagram", propertyName: "instagram" },
  { label: "LinkedIn", propertyName: "linkedIn" },
  { label: "Ubicación", propertyName: "ubicacion" },
  { label: "WhatsApp Business", propertyName: "whatsappBusiness" },
  { label: "Youtube", propertyName: "youtube" },
];

const emptyFormValues = [...inputFields, ...socialFields].reduce(
  (acc, field) => ({ ...acc, [field.propertyName]: "" }),
  { fotoPerfil: "", fotoPortada: "" }
);

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
            <div className="flex self-center w-full text-center justify-center mt-6 mb-6">
              <p className="text-black font-semibold text-lg">Datos Visibles</p>
            </div>
            {inputFields.map((field) => (
              <Grid item xs={12} key={field.propertyName}>
                {/* <TextField
                  fullWidth={true}
                  xs={12}
                  sx={{ backgroundColor: "#f5f5f5", borderRadius: "1rem" }}
                  margin="normal"
                  InputProps
                  label={field.label}
                  variant="standard"
                  name={field.propertyName}
                  onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                  value={formValues[field.propertyName]}
                /> */}
                <input
                  type="text"
                  name={field.propertyName}
                  onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                  value={formValues[field.propertyName]}
                  placeholder={field.label}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "8px",
                    borderRadius: "1rem",
                    backgroundColor: "#f5f5f5",
                    color: "black",
                  }}
                ></input>
              </Grid>
            ))}
            <div className="flex self-center w-full text-center justify-center mt-6 mb-6">
              <p className="text-black font-semibold text-lg">Hipervínculos</p>
            </div>
            <Grid container spacing={2} mb={2} sx={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
              {socialFields.map((field, idx) => (
                <Grid
                  item
                  xs={socialFields.length % 2 !== 0 && idx === socialFields.length - 1 ? 12 : 6}
                  key={field.propertyName}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img src={`/images/${field.propertyName}.png`} style={{ width: "30px", height: "30px" }}></img>
                  <input
                    type="text"
                    name={field.propertyName}
                    onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                    value={formValues[field.propertyName]}
                    placeholder={field.label}
                    style={{
                      width: "100%",
                      flex: 1,
                      padding: "8px",
                      marginBottom: "8px",
                      borderRadius: "1rem",
                      backgroundColor: "#f5f5f5",
                      color: "black",
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <hr style={{ margin: "0 auto", backgroundColor: "gray", height: "1.5px", width: "100%" }}></hr>
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
            <div className="flex self-center text-center justify-center mt-4">
              <Button
                onClick={handleAddSocialField}
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  minWidth: "30px",
                  fontSize: "24px",
                  textTransform: "none",
                  color: "green",
                  borderColor: "green",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "rgba(0, 128, 0, 0.1)",
                    borderColor: "green",
                  },
                }}
              >
                +
              </Button>
            </div>

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
