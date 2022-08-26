import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

// import { logoutUser } from '../../store/actions/userActions';

const Account: React.FC = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    first_name: 'Alexander',
    last_name: 'Bakay',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    id: '1',
    email: 'bakay.dvr@gmail.com',
  };
  const [currentUser, setCurrentUser] = useState(initialState);

  const handleLogoutUser = () => {
    // dispatch(logoutUser());
    // navigate('/login');
  };

  return (
    <>
      <Head>
        <title>Account</title>
        <meta
          name='Task Tracker Account Page'
          content='Account page'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Layout>
        <section className='user'>
          <h2 className='userTitle'>{`Hello, ${currentUser.first_name}!`}</h2>
          <div className='userInfoContainer'>
            <p className='userInfoLabel'>Name</p>
            <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
          </div>
          <div className='userInfoContainer'>
            <p className='userInfoLabel'>Email</p>
            <p>{currentUser.email}</p>
          </div>
          <div className='userButtonContainer'>
            <button
              className='link'
              onClick={() => {
                router.push('/');
              }}
            >
              Back to main
            </button>
            <button
              className='link mt-5'
              onClick={handleLogoutUser}
            >
              Log out
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Account;
