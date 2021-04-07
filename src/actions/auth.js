import { appFirebase, googleProvider } from '../firebase/firebaseConfig';
import types from '../types';
import { finishLoading, setError, startLoading } from './ui';

export const googleSignIn = () => {
   return dispatch => {
      appFirebase
         .auth()
         .signInWithPopup(googleProvider)
         .then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
            // console.log(appFirebase.auth().currentUser);
         })
         .catch(e => console.log(e));
   };
};
export const signInWithEmailPassword = (email, password) => {
   return dispatch => {
      dispatch(startLoading());

      appFirebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(finishLoading());
            dispatch(login(user.uid, user.displayName));
         })
         .catch(e => {
            const newError = e.code.slice(5, e.code.length);
            dispatch(setError(newError));
            console.log(newError);
         });
   };
};

export const registerEmailPassword = (email, password, name) => {
   return dispatch => {
      appFirebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(async ({ user }) => {
            await user.updateProfile({
               displayName: name,
            });
            dispatch(login(user.uid, user.displayName));
            // console.log(user);
         })
         .catch(e => {
            const newError = e.code.slice(5, e.code.length);
            dispatch(setError(newError));
            console.log(newError);
         });
   };
};

export const login = (uid, displayName) => ({
   type: types.login,
   payload: {
      uid,
      displayName,
   },
});

export const startLogout = () => {
   return async dispatch => {
      await appFirebase.auth().signOut();
      dispatch(logout());
   };
};

export const logout = () => ({ type: types.logout });
