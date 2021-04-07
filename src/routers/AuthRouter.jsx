import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
   return (
      <div className="bg-green-200 w-screen h-screen pt-8">
         <div className="w-80 h-80 m-auto">
            <Switch>
               <Route exact path="/auth/login" component={LoginScreen} />

               <Route exact path="/auth/register" component={RegisterScreen} />

               <Redirect to="/auth/login" />
            </Switch>
         </div>
      </div>
   );
};
