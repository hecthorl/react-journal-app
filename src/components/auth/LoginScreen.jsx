import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { googleSignIn, signInWithEmailPassword } from '../../actions/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { ERRORS } from '../../helpers';

const SignInSchema = Yup.object().shape({
   email: Yup.string().email('Correo inválido').required('Campo oblogatorio'),
   password: Yup.string()
      .min(6, 'Demasiado corto')
      .required('Campo oblogatorio'),
});

export const LoginScreen = () => {
   const dispatch = useDispatch();
   const { loading, msgError } = useSelector(state => state.ui);

   const firebaseError = msgError && ERRORS[msgError];

   const btnDisabled = loading && 'cursor-not-allowed disabled:opacity-50';

   return (
      <div className="form-container">
         <h3 className="text-4xl my-4 text-center text-white">Login</h3>
         <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={({ email, password }) => {
               dispatch(signInWithEmailPassword(email, password));
            }}
         >
            {({ handleChange, values, handleSubmit, errors }) => (
               <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-1"
               >
                  <input
                     type="text"
                     name="email"
                     placeholder="Correo"
                     value={values.email}
                     onChange={handleChange}
                     className={`input ${errors.email && 'errors'}`}
                  />
                  <span className="text-sm ml-2 text-red-600 pb-2">
                     {errors.email && errors.email}
                  </span>
                  <input
                     type="password"
                     name="password"
                     placeholder="Contraseña"
                     value={values.password}
                     onChange={handleChange}
                     className={`input ${errors.password && 'errors'}`}
                  />
                  <span className="text-sm ml-2 text-red-600 pb-2">
                     {(errors.password && errors.password) || firebaseError}
                  </span>
                  <button className={`btn-login ${btnDisabled}`} type="submit">
                     Entrar
                  </button>
               </form>
            )}
         </Formik>
         <button
            className="btn-login mt-3"
            onClick={() => dispatch(googleSignIn())}
         >
            <FcGoogle className="text-xl inline" /> Login con Google
         </button>

         <div className="mt-2">
            <Link
               className=" text-blue-500 hover:underline"
               to="/auth/register"
            >
               No tienes cuenta?
            </Link>
         </div>
      </div>
   );
};
