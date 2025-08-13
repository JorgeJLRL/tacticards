"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InfoFieldModal from "./infoFieldsModal.js";
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
  const [infoModalOpen, setInfoModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState(emptyFormValues);
  const [extraSocialFields, setExtraSocialFields] = React.useState([]);
  const [extraInfoFields, setExtraInfoFields] = React.useState([]);
  const [pickedFotoPerfil, setPickedFotoPerfil] = React.useState();
  const [pickedFotoPortada, setPickedFotoPortada] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleInfoModalOpen = () => setInfoModalOpen(true);
  const closeInfoModal = () => setInfoModalOpen(false);
  const handleClose = () => {
    setExtraSocialFields([]);
    setExtraInfoFields([]);
    setPickedFotoPerfil(null);
    setPickedFotoPortada(null);
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
        setPickedFotoPerfil(reader.result);
        setFormValues({ ...formValues, fotoPerfil: event.target.result });
      } else {
        setPickedFotoPortada(reader.result);
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

  const handleAddInfoField = (infoField) => {
    const placeholder = formatFieldName(infoField);
    infoField = infoField.replace(/-/g, "");

    setExtraInfoFields((prev) => [
      ...prev,
      {
        id: `${infoField}-${prev.length + 1}`,
        [infoField]: "",
        placeholder: placeholder,
      },
    ]);
    setInfoModalOpen(false);
  };

  function formatFieldName(fieldName) {
    if (!fieldName) return "";
    const formatted = fieldName.replace(/-/g, " ");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  const handleChangeInfoField = (id, field, value) => {
    setExtraInfoFields((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
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
      <InfoFieldModal openInfoModal={infoModalOpen} closeInfoModal={closeInfoModal} addField={handleAddInfoField} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex self-center w-full text-center justify-center mb-6 gap-4">
              <div className="w-full flex flex-col items-center gap-3">
                <div className="w-full">
                  <input
                    accept="image/*"
                    type="file"
                    id={`fotoPerfil`}
                    style={{ display: "none" }}
                    onChange={(e) => handleImageChange(e, "fotoPerfil")}
                  />
                  <label htmlFor={`fotoPerfil`}>
                    <Button variant="outlined" component="span" fullWidth sx={{ textTransform: "none" }}>
                      {formValues.fotoPerfil ? "Cambiar foto de perfil" : "Subir foto de perfil"}
                    </Button>
                  </label>
                </div>
                {pickedFotoPerfil ? (
                  <div className="w-40 h-40 mb-6">
                    <img src={pickedFotoPerfil ? pickedFotoPerfil : null} className="w-40 h-40"></img>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col items-center gap-3">
                <div className="w-full">
                  <input
                    accept="image/*"
                    type="file"
                    id={`fotoPortada`}
                    style={{ display: "none" }}
                    onChange={(e) => handleImageChange(e, "fotoPortada")}
                  />
                  <label htmlFor={`fotoPortada`}>
                    <Button variant="outlined" component="span" fullWidth sx={{ textTransform: "none" }}>
                      {formValues.fotoPortada ? "Cambiar foto de portada" : "Subir foto de portada"}
                    </Button>
                  </label>
                </div>
                {pickedFotoPortada ? (
                  <div className="w-60 h-20 mb-6">
                    <img src={pickedFotoPortada ? pickedFotoPortada : null} className="w-full h-full"></img>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex self-center w-full text-center justify-center mt-6 mb-6">
              <p className="text-black font-semibold text-lg">Datos Visibles</p>
            </div>
            {inputFields.map((field, index) => (
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
                {index === 2 && <div className="mt-8"></div>}
              </Grid>
            ))}
            {extraInfoFields.map((field) => {
              const fieldName = Object.keys(field).find((k) => k !== "id");
              return (
                <input
                  type="text"
                  name={field.id}
                  onChange={(e) => handleChangeInfoField(field.id, fieldName, e.target.value)}
                  value={field[fieldName]}
                  placeholder={field.placeholder}
                  key={field.id}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "8px",
                    borderRadius: "1rem",
                    backgroundColor: "#f5f5f5",
                    color: "black",
                  }}
                ></input>
              );
            })}
            <div className="flex self-center text-center justify-center mt-4 mb-4">
              <Button
                onClick={handleInfoModalOpen}
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
            <Grid container spacing={2} sx={{ alignItems: "end" }}>
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

            <Box mt={3} display="flex" justifyContent="flex-end" className="gap-4">
              <Button
                variant="contained"
                onClick={handleClose}
                disabled={isLoading}
                sx={{ backgroundColor: "darkgrey" }}
              >
                Cerrar
              </Button>
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
