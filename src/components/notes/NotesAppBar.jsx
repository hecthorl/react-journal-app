import React from 'react';

export const NotesAppBar = () => {
   return (
      <div className="bg-green-400 flex h-12 justify-between px-10 items-center">
         <span className="">{new Date().toLocaleDateString()}</span>
         <div className="space-x-4">
            <button className="outline-none">Picture</button>
            <button className="outline-none">Save</button>
         </div>
      </div>
   );
};
