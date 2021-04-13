import types from '../types';

const init = {
   notes: [],
   active: null,
};

export const notesReducer = (state = init, action) => {
   switch (action.type) {
      case types.notesActive:
         return {
            ...state,
            active: {
               ...action.payload,
            },
         };
      case types.notesLoad:
         return { ...state, notes: [...action.payload] };

      case types.notesUpdated:
         return {
            ...state,
            notes: state.notes.map(note =>
               note.id === action.payload.id ? action.payload.note : note
            ),
         };
      case types.notesFinished:
         return { ...state, active: null };

      case types.notesDelete:
         return {
            ...state,
            active: null,
            notes: state.notes.filter(note => note.id !== action.payload),
         };
      case types.notesAddNew:
         return {
            ...state,
            notes: [action.payload, ...state.notes],
         };
      case types.notesLogoutCleaning:
         return init;

      default:
         return state;
   }
};
