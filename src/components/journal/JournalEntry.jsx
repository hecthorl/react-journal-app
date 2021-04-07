import React from 'react';

export const JournalEntry = () => {
   return (
      <div className="h-24 gap-x-5 flex justify-between bg-green-700 pr-5 text-gray-100">
         <div
            className="bg-cover w-1/4"
            style={{
               backgroundImage:
                  "url('https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg')",
            }}
         ></div>

         <div className="text-center w-3/4">
            <p className="text-xl">Un nuevo día</p>
            <p className="mt-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
         </div>

         <div className="w-1/4 text-center flex flex-col justify-center">
            <span>Monday</span>
            <h4>28</h4>
         </div>
      </div>
   );
};
