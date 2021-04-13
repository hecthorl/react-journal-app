import { db } from '../firebase/firebaseConfig';
import { fileUpload, loadNotes } from '../helpers';
import types from '../types';

export const startNewNote = () => {
   return async (dispatch, getSate) => {
      const {
         auth: { uid },
      } = getSate();

      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime(),
      };
      const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(doc.id, newNote));
      dispatch(addNewNote(doc.id, newNote));
   };
};

export const addNewNote = (id, note) => ({
   type: types.notesAddNew,
   payload: {
      id,
      ...note,
   },
});

export const activeNote = (id, note) => ({
   type: types.notesActive,
   payload: {
      ...note,
      id,
   },
});

export const setNotes = notes => ({
   type: types.notesLoad,
   payload: notes,
});

export const startLoadingNotes = uid => {
   return async dispatch => {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
   };
};

export const startSaveNote = note => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;

      if (!note.url) note.url = null;

      const noteToFirestore = { ...note };
      delete noteToFirestore.id;

      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

      dispatch(refreshNote(note.id, noteToFirestore));
      dispatch(finishedNote());
   };
};
export const finishedNote = () => ({ type: types.notesFinished });

export const refreshNote = (id, note) => ({
   type: types.notesUpdated,
   payload: {
      id,
      note: {
         id,
         ...note,
      },
   },
});

export const startUploadingFile = file => {
   return async (dispatch, getState) => {
      const { active: activeNote } = getState().notes;
      const fileUrl = await fileUpload(file);
      activeNote.url = fileUrl;

      dispatch(startSaveNote(activeNote));
   };
};

export const startDeleteingNote = id => {
   return async (dispatch, getState) => {
      const uid = getState().auth.uid;

      try {
         await db.doc(`${uid}/journal/notes/${id}`).delete();
         dispatch(deleteNote(id));
         console.log(id);
      } catch (error) {
         console.log(error);
      }
   };
};

export const deleteNote = id => ({
   type: types.notesDelete,
   payload: id,
});

export const cleaningNotes = () => ({ type: types.notesLogoutCleaning });
