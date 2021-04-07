import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
   return (
      <div className="h-full">
         <NotesAppBar />
         <div className="h-notes flex flex-col justify-center items-center gap-y-4">
            <input
               type="text"
               placeholder="Some awesome title"
               className="input w-96 bg-green-100"
               autoComplete="off"
            />
            <textarea
               placeholder="What happened today"
               className="text-area bg-green-100"
            ></textarea>
            <div className="w-1/3">
               <img
                  className="shadow-2xl"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                  alt="imagen"
               />
            </div>
         </div>
      </div>
   );
};
