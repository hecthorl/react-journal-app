import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
   const dispatch = useDispatch();
   const { active: note } = useSelector(state => state.notes);
   const activeId = useRef(note.id);

   const [values, handleInputChange, reset] = useForm(note);

   useEffect(() => {
      if (note.id !== activeId.current) {
         reset(note);
         activeId.current = note.id;
      }
   }, [note, reset]);

   useEffect(() => {
      dispatch(activeNote(values.id, { ...values }));
   }, [values, dispatch]);

   const imgDummy =
      'https://dummyimage.com/600x400/000/fff.jpg&text=optional+image';
   return (
      <div className="h-full">
         <NotesAppBar />
         <div className="h-notes flex flex-col justify-center items-center gap-y-4">
            <input
               onSubmit={event => event.preventDefault()}
               type="text"
               placeholder="Some awesome title"
               className="input w-96 bg-green-100"
               name="title"
               value={values.title}
               onChange={handleInputChange}
            />
            <textarea
               name="body"
               placeholder="What happened today"
               className="text-area bg-green-100"
               value={values.body}
               onChange={handleInputChange}
            ></textarea>
            <div className="w-1/3">
               <img
                  className="shadow-2xl"
                  src={`${note.url || imgDummy}`}
                  alt="imagen"
               />
            </div>
         </div>
      </div>
   );
};
