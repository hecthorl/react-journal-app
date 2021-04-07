import types from '../types';

const authReducer = (state = null, action) => {
   switch (action.type) {
      case types.login:
         return { uid: action.payload.uid, name: action.payload.displayName };

      case types.logout:
         return null;

      default:
         return state;
   }
};

export default authReducer;
