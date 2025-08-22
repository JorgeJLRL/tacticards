import { Box, Modal } from "@mui/material";
import React from "react";

export default function EmailModal({ open, closeModal, sendMail }) {
  const [mail, setMail] = React.useState("");

  function handleChangeMail(event) {
    setMail(event.target.value);
  }
  function handleClose() {
    closeModal();
    setMail("");
  }
  return (
    <Modal
      open={!!open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
         w-[300px] max-h-[90vh] bg-white border-2  
         p-4 overflow-y-auto max-xs:w-[90vw] rounded-md"
      >
        <div className="flex flex-col justify-center gap-4">
          <p className="text-center semibold text-base">Envía la información de este contacto al siguiente correo:</p>
          <input
            type="email"
            onChange={handleChangeMail}
            value={mail}
            className="w-full rounded-md p-[5px] bg-slate-300 border-black border-solid border-2"
            required
          ></input>
          <button
            className=" bg-green-500 rounded-lg cursor-pointer text-white w-[50%] self-center"
            onClick={() => {
              sendMail(mail);
              handleClose();
            }}
          >
            Enviar
          </button>
        </div>
      </Box>
    </Modal>
  );
}
