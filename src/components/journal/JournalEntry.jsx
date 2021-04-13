import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { showDates } from '../../helpers/index';

export const JournalEntry = props => {
   const { title, date, body, id, url } = props;
   const dispatch = useDispatch();

   const initGen = showDates(date);

   const handleEntry = () => {
      dispatch(activeNote(id, { title, date, body, url }));
   };

   return (
      <div className="h-24 gap-x-5 flex justify-between bg-green-700 pr-5 text-gray-100">
         <div
            className="bg-cover w-1/4"
            style={{
               backgroundImage: `url('${url}')`,
            }}
         ></div>

         <div
            onClick={handleEntry}
            className="text-center w-3/4 cursor-pointer"
         >
            <p className="text-xl">{title}</p>
            <p className="mt-2">{body}</p>
         </div>

         <div className="w-1/4 text-center flex flex-col justify-center">
            <span className="capitalize">{initGen.next().value}</span>
            <h4 className="text-4xl">{initGen.next().value}</h4>
         </div>
      </div>
   );
};
