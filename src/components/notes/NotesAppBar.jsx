import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   startDeleteingNote,
   startSaveNote,
   startUploadingFile,
} from '../../actions/notes';

export const NotesAppBar = () => {
   const fileRef = useRef();
   const dispatch = useDispatch();
   const { active } = useSelector(state => state.notes);

   const isoString = new Date().toISOString();
   const date = new Date(isoString);
   const fechaCompleta = new Intl.DateTimeFormat('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
   }).format(date);

   return (
      <div className="bg-green-400 flex h-12 justify-between px-10 items-center">
         <span className="">{fechaCompleta}</span>
         <input
            onChange={event => {
               const file = event.target.files[0];
               if (file) {
                  dispatch(startUploadingFile(file));
               }
            }}
            type="file"
            className="hidden"
            ref={fileRef}
         />
         <div className="space-x-4">
            <button
               onClick={() => dispatch(startDeleteingNote(active.id))}
               className="bg-red-500 hover:bg-red-600 p-1 rounded-md outline-none focus:outline-none"
            >
               Delete Note
            </button>
            <button
               onClick={() => fileRef.current.click()}
               className="outline-none p-1 rounded-md focus:outline-none"
            >
               Picture
            </button>
            <button
               onClick={() => dispatch(startSaveNote(active))}
               type="submit"
               className="outline-none p-1 rounded-md focus:outline-none"
            >
               Save
            </button>
         </div>
      </div>
   );
};
