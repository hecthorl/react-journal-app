import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
   return (
      <div className="flex bg-green-200">
         <Sidebar />
         <main className="w-full">
            {/* <NothingSelected /> */}
            <NoteScreen />
         </main>
      </div>
   );
};
