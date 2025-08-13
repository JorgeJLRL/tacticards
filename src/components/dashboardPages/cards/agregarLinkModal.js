import { Box, Button, Modal } from "@mui/material";
import React from "react";

export default function AgregarLinkModal({
  openLinkModal,
  closeLinkModal,
  addSocialField,
  linkTitle,
  linkImg,
  isCustom,
}) {
  const [titulo, setTitulo] = React.useState("");
  const [url, setUrl] = React.useState("");
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
            {linkImg ? <img src={`/images/${linkImg}`} alt={linkTitle} className="w-16 h-16 mb-2"></img> : null}
            <span className="text-lg font-semibold">{linkTitle}</span>
          </div>
          <input
            type="text"
            placeholder="URL"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </div>
        <div className="flex gap-4 justify-end mt-4">
          <Button onClick={closeLinkModal} sx={{ mt: 2, ml: 2 }}>
            Cerrar
          </Button>
          <Button
            onClick={() => {
              addSocialField(linkTitle, url, linkImg);
              closeLinkModal();
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
