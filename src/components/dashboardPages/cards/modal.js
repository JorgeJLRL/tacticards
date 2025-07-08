"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const inputFields = [
  { label: 'Nombre de la tarjeta', propertyName: 'nombreTarjeta' },
  { label: 'Puesto', propertyName: 'puesto' },
  { label: 'Teléfono fijo', propertyName: 'telefonoFijo' },
  { label: 'Teléfono móvil', propertyName: 'telefonoMovil' },
  { label: 'Dirección', propertyName: 'direccion' },
  { label: 'Dirección de correo', propertyName: 'direccionCorreo' },
  { label: 'Sitio web', propertyName: 'sitioWeb' },
  { label: 'Facebook', propertyName: 'facebook' },
  { label: 'Instagram', propertyName: 'instagram' },
  { label: 'LinkedIn', propertyName: 'linkedIn' },
  { label: 'Ubicación', propertyName: 'ubicacion' },
  { label: 'WhatsApp Business', propertyName: 'whatsappBusiness' },
];

const emptyFormValues = inputFields.reduce((acc, field) => ({ ...acc, [field.propertyName]: '' }), { fotoPerfil: '', fotoPortada: '' });

export default function CardsModal({ openModal, closeModal }) {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(emptyFormValues);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
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
      if (type === 'fotoPerfil') {
        setFormValues({ ...formValues, fotoPerfil: event.target.result });
      } else {
        setFormValues({ ...formValues, fotoPortada: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const sendForm = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/cardInfos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formValues, user: localStorage.getItem('userId')})
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
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
                  onChange={(e) => handleImageChange(e, 'fotoPerfil')}
                  label="Foto de perfil"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ accept: 'image/*' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => handleImageChange(e, 'fotoPortada')}
                  label="Foto de portada"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ accept: 'image/*' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {inputFields.map((field) => (
                <Grid item xs={6} key={field.propertyName}>
                  <TextField
                    fullWidth
                    margin='normal'
                    label={field.label}
                    variant="standard"
                    name={field.propertyName}
                    onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                    value={formValues[field.propertyName]}
                  />
                </Grid>
              ))}
            </Grid>
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={sendForm}>Guardar</Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}