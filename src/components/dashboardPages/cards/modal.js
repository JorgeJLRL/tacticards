"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InfoFieldModal from "./infoFieldsModal.js";
import { Grid, MenuItem, Select } from "@mui/material";
import RedesExtraModal from "./redesExtraModal.js";

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
  const [redesModalOpen, setRedesModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState(emptyFormValues);
  const [extraSocialFields, setExtraSocialFields] = React.useState([]);
  const [extraInfoFields, setExtraInfoFields] = React.useState([]);
  const [pickedFotoPerfil, setPickedFotoPerfil] = React.useState();
  const [pickedFotoPortada, setPickedFotoPortada] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleInfoModalOpen = () => setInfoModalOpen(true);
  const closeInfoModal = () => setInfoModalOpen(false);
  const handleRedesModalOpen = () => setRedesModalOpen(true);
  const closeRedesModal = () => setRedesModalOpen(false);
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
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/cardInfos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          ...formValues,
          extraInfoFields: extraInfoFields,
          redesExtra: extraSocialFields,
          user: userId,
        }),
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

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/api/users", {
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        if (data && data.length > 0) {
          setUsers(data); // Set the first user as default
          setUserId(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const handleAddSocialField = (nombreRed, linkRed, iconoRed, isCustom) => {
    setExtraSocialFields((prev) => [
      ...prev,
      {
        id: `red-${prev.length + 1}`,
        iconoRed: iconoRed,
        nombreRed: nombreRed,
        linkRed: linkRed,
        isCustom: isCustom,
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
        value: "",
        placeholder: placeholder,
        name: infoField,
      },
    ]);
    setInfoModalOpen(false);
  };

  function handleDeleteInfoField(id) {
    setExtraInfoFields((prev) => prev.filter((item) => item.id !== id));
  }

  function handleDeleteSocialField(id) {
    setExtraSocialFields((prev) => prev.filter((item) => item.id !== id));
  }

  function formatFieldName(fieldName) {
    if (!fieldName) return "";
    const formatted = fieldName.replace(/-/g, " ");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  const handleChangeInfoField = (id, value) => {
    setExtraInfoFields((prev) => prev.map((item) => (item.id === id ? { ...item, value } : item)));
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
      <RedesExtraModal
        openRedesModal={redesModalOpen}
        closeRedesModal={closeRedesModal}
        addSocialField={handleAddSocialField}
        changeCustomIcon={handleImageChangeExtra}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
         w-[700px] max-h-[90vh] bg-white border-2 border-black shadow-2xl 
         p-4 overflow-y-auto max-xs:w-[90vw] max-xs:h-[90vh]"
        >
          <div>
            <div className="flex self-center w-full text-center justify-center mb-6 flex-col">
              <p className="text-black font-semibold text-lg mb-4">Asignar a usuario</p>
              <Select value={userId} onChange={(e) => setUserId(e.target.value)} fullWidth>
                {users.length > 0
                  ? users?.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name} ({user.email})
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </div>
            <div className="flex self-center w-full text-center justify-center mb-6 gap-4">
              <div className="w-full flex flex-col items-center gap-3 max-xs:w-[90%]">
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
                  <div className="w-40 h-40 mb-6 max-xs:w-[90%]">
                    <img src={pickedFotoPerfil ? pickedFotoPerfil : null} className="w-40 h-40"></img>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col items-center gap-3 max-xs:w-[90%]">
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
                  <div className="w-60 h-20 mb-6 max-xs:w-[90%]">
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
              return (
                <div key={field.id} className="relative mb-4 w-full">
                  <input
                    type="text"
                    name={field.id}
                    onChange={(e) => handleChangeInfoField(field.id, e.target.value)}
                    value={field.value}
                    placeholder={field.placeholder}
                    className="w-full pr-20 pl-4 py-2 rounded-full bg-gray-100 text-black"
                  />
                  <button
                    onClick={() => handleDeleteInfoField(field.id)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600"
                  >
                    X
                  </button>
                </div>
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
            <Grid container spacing={2} sx={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
              {extraSocialFields.map((field, i) => (
                <Grid
                  item
                  xs={extraSocialFields.length % 2 !== 0 && i === extraSocialFields.length - 1 ? 12 : 6}
                  key={field.id}
                  className="relative"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={field.isCustom ? field.iconoRed : `/images/${field.iconoRed}`}
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                  <input
                    type="text"
                    name={field.nombreRed}
                    onChange={(e) => handleChangeSocialField(field.id, "linkRed", e.target.value)}
                    value={field.linkRed}
                    placeholder={field.nombreRed ? field.nombreRed : "Nombre de la red"}
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
                  <button
                    onClick={() => handleDeleteSocialField(field.id)}
                    className="absolute right-0 top-5 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  >
                    X
                  </button>
                </Grid>
              ))}
            </Grid>
            <div className="flex self-center text-center justify-center mt-4">
              <Button
                onClick={handleRedesModalOpen}
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
