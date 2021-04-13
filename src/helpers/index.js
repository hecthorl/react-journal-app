import { db } from '../firebase/firebaseConfig';

export const ERRORS = {
   'user-not-found': 'Usuario no existe',
   'email-already-exists': 'Este email ya existe',
   'email-already-in-use': 'Este email ya esta en uso',
   'wrong-password': 'Contraseña incorrecta',
};

export const loadNotes = async uid => {
   const notesSnap = await db.collection(`${uid}/journal/notes`).get();
   const notes = [];

   notesSnap.forEach(item => {
      notes.push({
         id: item.id,
         ...item.data(),
      });
   });

   return notes;
};

export function* showDates(date) {
   const fechaNum = new Intl.DateTimeFormat('es-PE', {
      day: '2-digit',
   }).format(date);

   const fechaDia = new Intl.DateTimeFormat('es-PE', {
      weekday: 'long',
   }).format(date);

   yield fechaDia;
   yield fechaNum;
}

export const fileUpload = async file => {
   const cloudUrl = 'https://api.cloudinary.com/v1_1/dqctqykk0/upload';
   const formData = new FormData();

   formData.append('upload_preset', 'my-diary-app');
   formData.append('file', file);
   try {
      const res = await fetch(cloudUrl, {
         method: 'POST',
         body: formData,
      });
      const cloudResp = await res.json();
      return cloudResp.secure_url;
   } catch (error) {
      console.log(error);
   }
};
