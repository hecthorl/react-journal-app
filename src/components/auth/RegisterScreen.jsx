import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { registerEmailPassword } from '../../actions/auth';
import { ERRORS } from '../../helpers';

const SignUpSchema = Yup.object().shape({
   name: Yup.string().min(3, 'Demasiado corto').required('Campo oblogatorio'),
   email: Yup.string().email('Correo inválido').required('Campo oblogatorio'),
   password: Yup.string()
      .min(8, 'Debe ser al menos 8 carácteres')
      .required('Campo oblogatorio'),
   passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Contraseñas deben ser iguales'
   ),
});

export const RegisterScreen = () => {
   const dispatch = useDispatch();
   const { msgError } = useSelector(state => state.ui);

   const firebaseError = msgError && ERRORS[msgError];

   return (
      <div className="form-container">
         <h3 className="text-4xl my-4 text-center text-white">Register</h3>
         <Formik
            initialValues={{
               name: '',
               email: '',
               password: '',
               passwordConfirm: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={values => {
               const { email, password, name } = values;
               dispatch(registerEmailPassword(email, password, name));
            }}
         >
            {({ handleChange, values, handleSubmit, errors }) => (
               <form
                  className="flex flex-col space-y-1"
                  onSubmit={handleSubmit}
               >
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     className={`input ${
                        errors.name && 'border-red-500 focus:border-red-500'
                     }`}
                     value={values.name}
                     onChange={handleChange}
                  />
                  <span className="text-sm text-red-600 pl-3 pb-2">
                     {errors.name && errors.name}
                  </span>
                  <input
                     type="text"
                     placeholder="Email"
                     name="email"
                     className={`input ${errors.email && 'errors'}`}
                     value={values.email}
                     onChange={handleChange}
                  />
                  <span className="text-sm text-red-600 pl-3 pb-2">
                     {(errors.email && errors.email) || firebaseError}
                  </span>
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     className="input"
                     value={values.password}
                     onChange={handleChange}
                  />
                  <span className="text-sm text-red-600 pl-3 pb-2">
                     {errors.password && errors.password}
                  </span>
                  <input
                     type="password"
                     placeholder="Confirm password"
                     name="passwordConfirm"
                     className="input"
                     value={values.passwordConfirm}
                     onChange={handleChange}
                  />
                  <span className="text-sm text-red-600 pl-3 pb-2">
                     {errors.passwordConfirm && errors.passwordConfirm}
                  </span>
                  <button className="btn-login mt-3" type="submit">
                     Register
                  </button>
                  <div>
                     <Link
                        to="/auth/login"
                        className="text-blue-500 hover:underline"
                     >
                        Already registered?
                     </Link>
                  </div>
               </form>
            )}
         </Formik>
      </div>
   );
};
