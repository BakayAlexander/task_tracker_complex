import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Formik, Form, Field, ErrorMessage } from 'formik';

// import { loginUser } from '../../store/actions/userActions';

import { FormikValuesRegister, validationRegister } from '../utils/validation';
import Head from 'next/head';

const Register: React.FC = () => {
  const router = useRouter();
  // const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  // const localToken = localStorage.getItem('token');

  // const registerError = useSelector(state => state.user.createUserError);
  // const isLoading = useSelector(state => state.user.createUserLoading);

  // useEffect(() => {
  //   if (localToken) {
  //     navigate('/');
  //   }
  // }, []);

  const handleSubmitRegister = (values: FormikValuesRegister) => {
    // dispatch(
    //   registerUser({
    //   email: values.email,
    //   password: values.password,
    //   first_name: values.first_name,
    //   last_name: values.last_name,
    //   avatar: values.avatar,
    //   })
    // ).then(res => {
    //   if (res) {
    //     navigate('/login');
    //   }
    // });
  };

  return (
    <section className='auth'>
      <Head>
        <title>Register</title>
        <meta
          name='Register to task tracker'
          content='Register page'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Formik
        initialValues={initialValues}
        validate={values => validationRegister(values)}
        onSubmit={values => handleSubmitRegister(values)}
      >
        <Form className='authForm'>
          <h1 className='authHeader'>Register</h1>
          <div className='space-y-4'>
            <label className='authLabel'>
              <Field
                className='authInput'
                type='email'
                name='email'
                placeholder='Email'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='email'
              component='div'
            />
            <label className='authLabel'>
              <Field
                className='authInput'
                type='password'
                name='password'
                placeholder='Password'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='password'
              component='div'
            />
            <label className='authLabel'>
              <Field
                className='authInput'
                type='text'
                name='first_name'
                placeholder='First Name'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='first_name'
              component='div'
            />
            <label className='authLabel'>
              <Field
                className='authInput'
                type='text'
                name='last_name'
                placeholder='Last Name'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='last_name'
              component='div'
            />
            <label className='authLabel'>
              <Field
                className='authInput'
                type='text'
                name='avatar'
                placeholder='Avatar URL (optional)'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='avatar'
              component='div'
            />
          </div>
          <button
            className='authButton bg-[#9f546e] hover:bg-[#6a1633]'
            type='submit'
            // disabled={isLoading}
          >
            Register
          </button>
          {/* {registerError && <p className='authError text-center text-[17px]'>{registerError}</p>} */}

          <div className='text-[gray]'>
            Already a member?
            <button
              className='authLinkButton'
              type='submit'
              // disabled={isLoading}
              onClick={() => {
                router.push('/login');
              }}
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
export default Register;
