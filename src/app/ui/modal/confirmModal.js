import { Box, Modal } from "@mui/material";

export default function ConfirmModal({ open, closeModal, title }) {
  function handleClose() {
    closeModal();
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
          <h2 className="text-center font-bold text-lg mb-6">{title}</h2>
          <button
            onClick={handleClose}
            className="w-[50%] text-white bg-red-500 hover:bg-red-600 rounded-md self-center"
          >
            Cerrar
          </button>
        </div>
      </Box>
    </Modal>
  );
}
