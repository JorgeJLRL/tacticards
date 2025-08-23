import { Box, Modal } from "@mui/material";
import React from "react";

export default function EmailModal({ open, closeModal, sendMail, title, text }) {
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
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-center text-lg font-[800]">{title}</h2>
          <p className="text-center semibold text-base mb-4">{text}</p>
          <input
            type="email"
            onChange={handleChangeMail}
            value={mail}
            className="w-full rounded-md p-[5px] bg-slate-300 border-black border-solid border-2 mb-4"
            required
          ></input>
          <div className="flex gap-4">
            <button
              className=" bg-green-500 rounded-lg cursor-pointer text-white w-[50%] self-center hover:bg-green-600"
              onClick={() => {
                sendMail(mail);
                handleClose();
              }}
            >
              Enviar
            </button>
            <button
              className="bg-red-500 rounded-lg cursor-pointer text-white w-[50%] self-center hover:bg-red-600"
              onClick={handleClose}
            >
              Salir
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
