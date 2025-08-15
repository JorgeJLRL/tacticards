import { Box, Button, Modal } from "@mui/material";
import React from "react";

export default function AgregarLinkModal({
  openLinkModal,
  closeLinkModal,
  addSocialField,
  linkTitle,
  linkImg,
  isCustom,
  changeCustomIcon,
}) {
  const [titulo, setTitulo] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [iconoCustom, setIconoCustom] = React.useState("");

  function handleCloseModal() {
    setTitulo("");
    setUrl("");
    setIconoCustom("");
    closeLinkModal();
  }

  function handleIconChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setIconoCustom(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Modal
      open={!!openLinkModal}
      onClose={closeLinkModal}
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
          textAlign: "center",
        }}
      >
        <h2 id="modal-modal-title" className="mb-4 text-center font-semibold">
          Agregar Hipervínculo
        </h2>
        <div className="flex flex-col gap-4 mb-4 w-full items-center">
          <div className="flex flex-col items-center">
            {linkImg && !isCustom ? (
              <img src={`/images/${linkImg}`} alt={linkTitle} className="w-16 h-16 mb-2"></img>
            ) : (
              <div className="w-full justify-center flex items-center mb-2 flex-col">
                <div>
                  <input
                    accept="image/*"
                    type="file"
                    id={`customIcon`}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      handleIconChange(e);
                      changeCustomIcon(e, "iconoRed");
                    }}
                  />
                  <label htmlFor={`customIcon`}>
                    <Button variant="outlined" component="span" fullWidth sx={{ textTransform: "none" }}>
                      {iconoCustom ? "Cambiar icono" : "Subir icono"}
                    </Button>
                  </label>
                </div>
                {iconoCustom ? (
                  <div className="w-16 h-16 mt-4">
                    <img src={iconoCustom ? iconoCustom : null} className="w-16 h-16 self-center"></img>
                  </div>
                ) : null}
              </div>
            )}
          </div>
          {linkTitle && !isCustom ? (
            <span className="text-lg font-semibold">{linkTitle}</span>
          ) : (
            <input
              type="text"
              placeholder="Nombre del Hipervínculo"
              className="border border-gray-300 rounded p-2 w-full"
              onChange={(e) => setTitulo(e.target.value)}
              value={titulo}
            />
          )}
          <input
            type="text"
            placeholder="URL"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </div>
        <div className="flex gap-4 justify-end mt-4">
          <Button onClick={handleCloseModal} sx={{ mt: 2, ml: 2 }}>
            Cerrar
          </Button>
          <Button
            onClick={() => {
              addSocialField(!isCustom ? linkTitle : titulo, url, !isCustom ? linkImg : iconoCustom, isCustom);
              handleCloseModal();
            }}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Agregar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
