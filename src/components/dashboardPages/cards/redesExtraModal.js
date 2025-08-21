import { Box, Button, Modal } from "@mui/material";
import AgregarLinkModal from "./agregarLinkModal";
import React from "react";

export default function RedesExtraModal({ openRedesModal, closeRedesModal, addSocialField, changeCustomIcon }) {
  const [agregarLinkModal, setAgregarLinkModal] = React.useState(false);
  const [isCustomIcon, setIsCustomIcon] = React.useState(false);
  const [linkTitle, setLinkTitle] = React.useState("");
  const [linkImg, seTLinkImg] = React.useState("");
  const handleLinkModalOpen = (titulo, img) => {
    setLinkTitle(titulo);
    seTLinkImg(img);
    setAgregarLinkModal(true);
  };
  const closeLinkModal = () => setAgregarLinkModal(false);
  const redesSocial = [
    { titulo: "Facebook", img: "facebook.png" },
    { titulo: "Instagram", img: "instagram.png" },
    { titulo: "X", img: "x.png" },
    { titulo: "LinkedIn", img: "linkedin.png" },
    { titulo: "Threads", img: "threads.png" },
    { titulo: "YouTube", img: "youtube.png" },
    { titulo: "Twitch", img: "twitch.png" },
  ];
  const redesContacto = [
    { titulo: "WhatsApp", img: "whatsapp.png" },
    { titulo: "Telegram", img: "telegram.png" },
    { titulo: "WhatsApp Business", img: "whatsappBusiness.png" },
    { titulo: "Zoom", img: "zoom.png" },
    { titulo: "GMail", img: "gmail.png" },
  ];
  const redesMusica = [
    { titulo: "Spotify", img: "spotify.png" },
    { titulo: "Deezer", img: "deezer.png" },
    { titulo: "Apple Music", img: "applemusic.png" },
    { titulo: "Tidal", img: "tidal.png" },
  ];
  const redesNegocios = [
    { titulo: "Google Maps", img: "googlemaps.png" },
    { titulo: "Booking", img: "booking.png" },
    { titulo: "TripAdvisor", img: "tripadvisor.png" },
    { titulo: "Yelp", img: "yelp.png" },
    { titulo: "Trivago", img: "trivago.png" },
  ];
  const redesOtros = [
    { titulo: "OnlyFans", img: "onlyfans.png" },
    { titulo: "Amazon", img: "amazon.png" },
    { titulo: "Mercado Libre", img: "mercadolibre.png" },
  ];

  return (
    <>
      <AgregarLinkModal
        openLinkModal={agregarLinkModal}
        closeLinkModal={closeLinkModal}
        addSocialField={addSocialField}
        linkTitle={linkTitle}
        linkImg={linkImg}
        isCustom={isCustomIcon}
        changeCustomIcon={changeCustomIcon}
      />
      <Modal
        open={!!openRedesModal}
        onClose={closeRedesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
         w-[700px] max-h-[90vh] bg-white border-2 border-black shadow-2xl 
         p-4 overflow-y-auto max-xs:w-[90vw] max-xs:h-[90vh] bg-gradient-to-b from-sky-100 to-neutral-200 overflow-x-hidden"
        >
          <h2 id="modal-modal-title" className="mb-4 text-center font-semibold text-2xl">
            Hipervínculos
          </h2>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold">
            Social
          </h3>
          <div className="grid grid-cols-3 w-full">
            {redesSocial.map((red, index) => (
              <button
                key={index}
                className="flex flex-col items-center mb-4 cursor-pointer"
                onClick={() => {
                  setIsCustomIcon(false);
                  handleLinkModalOpen(red.titulo, red.img);
                }}
              >
                <img src={`/images/${red.img}`} alt={red.titulo} className="w-16 h-16 mb-2" />
                <span className="text-sm">{red.titulo}</span>
              </button>
            ))}
          </div>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold mt-4">
            Contacto
          </h3>
          <div className="grid grid-cols-3 w-full">
            {redesContacto.map((red, index) => (
              <button
                onClick={() => {
                  setIsCustomIcon(false);
                  handleLinkModalOpen(red.titulo, red.img);
                }}
                key={index}
                className="flex flex-col items-center mb-4"
              >
                <img src={`/images/${red.img}`} alt={red.titulo} className="w-16 h-16 mb-2" />
                <span className="text-sm">{red.titulo}</span>
              </button>
            ))}
          </div>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold mt-4">
            Música
          </h3>
          <div className="grid grid-cols-3 w-full">
            {redesMusica.map((red, index) => (
              <button
                onClick={() => {
                  setIsCustomIcon(false);
                  handleLinkModalOpen(red.titulo, red.img);
                }}
                key={index}
                className="flex flex-col items-center mb-4"
              >
                <img src={`/images/${red.img}`} alt={red.titulo} className="w-16 h-16 mb-2" />
                <span className="text-sm">{red.titulo}</span>
              </button>
            ))}
          </div>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold mt-4">
            Negocios
          </h3>
          <div className="grid grid-cols-3 w-full">
            {redesNegocios.map((red, index) => (
              <button
                onClick={() => {
                  setIsCustomIcon(false);
                  handleLinkModalOpen(red.titulo, red.img);
                }}
                key={index}
                className="flex flex-col items-center mb-4"
              >
                <img src={`/images/${red.img}`} alt={red.titulo} className="w-16 h-16 mb-2" />
                <span className="text-sm">{red.titulo}</span>
              </button>
            ))}
          </div>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold mt-4">
            Otros
          </h3>
          <div className="grid grid-cols-3 w-full">
            {redesOtros.map((red, index) => (
              <button
                onClick={() => {
                  setIsCustomIcon(false);
                  handleLinkModalOpen(red.titulo, red.img);
                }}
                key={index}
                className="flex flex-col items-center mb-4"
              >
                <img src={`/images/${red.img}`} alt={red.titulo} className="w-16 h-16 mb-2" />
                <span className="text-sm">{red.titulo}</span>
              </button>
            ))}
          </div>
          <h3 id="modal-modal-title" className="mb-4 text-center font-semibold mt-4">
            Personalizado
          </h3>
          <div className="flex w-full items-center  justify-center">
            <button
              className="flex flex-col items-center mb-4"
              onClick={() => {
                setIsCustomIcon(true);
                handleLinkModalOpen("Personalizado", "");
              }}
            >
              <div className="w-16 h-16 mb-2 items-center flex  flex-col justify-center  rounded-2xl border-2 border-gray-400 hover:border-gray-600 cursor-pointer">
                <span className="self-center">+</span>
              </div>
              <span className="text-sm">Agregar Personalizado</span>
            </button>
          </div>

          <div className="flex gap-4 justify-end mt-4">
            <Button onClick={closeRedesModal} sx={{ mt: 2, ml: 2 }}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
