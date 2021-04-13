import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { appFirebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
   const dispatch = useDispatch();
   const [checking, setChecking] = useState(true);
   const [isLogged, setIsLogged] = useState(false);

   useEffect(() => {
      appFirebase.auth().onAuthStateChanged(async currentUser => {
         if (currentUser) {
            dispatch(login(currentUser.uid, currentUser.displayName));
            setIsLogged(true);
            dispatch(startLoadingNotes(currentUser.uid));
         } else {
            setIsLogged(false);
         }
         setChecking(false);
      });
   }, [dispatch, checking]);

   if (checking) return <h1>Espere...</h1>;

   return (
      <Router>
         <Switch>
            <PublicRoute
               path="/auth"
               isAuthenticated={isLogged}
               component={AuthRouter}
            />

            <PrivateRoute
               isAuthenticated={isLogged}
               exact
               path="/"
               component={JournalScreen}
            />

            <Redirect to="/auth/login" />
         </Switch>
      </Router>
   );
};
