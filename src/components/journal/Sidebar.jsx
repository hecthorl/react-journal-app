import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
   const dispatch = useDispatch();
   const { name } = useSelector(state => state.auth);

   const handleLogout = () => {
      dispatch(startLogout());
   };

   return (
      <aside className="bg-green-400 p-3 space-y-8 h-screen w-side">
         <div className="w-full flex justify-between">
            <h3 className="text-3xl capitalize ">
               <span>{name}</span>
            </h3>

            <button
               onClick={handleLogout}
               className="outline-none focus:outline-none"
            >
               Logout
            </button>
         </div>

         <div className="w-full flex justify-center">
            <button className="btn-entry">New entry</button>
         </div>

         <JournalEntries />
      </aside>
   );
};
