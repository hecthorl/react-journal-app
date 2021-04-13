const types = {
   login: '[AUTH] login',
   logout: '[AUTH] logout',
   /**
    *
    */
   uiSetError: '[UI] set error',
   uiRemoveError: '[UI] remove error',
   uiStartLoading: '[UI] start loading',
   uiFinishLoading: '[UI] finish loading',
   /**
    * Notes
    */
   notesAddNew: '[Notes] new note',
   notesActive: '[Notes] set active note',
   notesUpdated: '[Notes] updated note',
   notesLoad: '[Notes] load notes',
   notesFileUrl: '[Notes] update image url',
   notesDelete: '[Notes] delete note',
   notesLogoutCleaning: '[Notes] logout cleaning',
   notesFinished: '[Notes] set null note',
};
export default types;
