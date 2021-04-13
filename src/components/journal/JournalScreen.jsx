import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
   const { active } = useSelector(state => state.notes);

   return (
      <div className="flex bg-green-200">
         <Sidebar />
         <main className="w-full">
            {active ? <NoteScreen /> : <NothingSelected />}
         </main>
      </div>
   );
};
