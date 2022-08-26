import React, { useEffect, useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// import { logoutUser } from '../../store/actions/userActions';

import styles from './header.module.css';
import Link from 'next/link';
import { User } from '../../typings';

const Header: React.FC = () => {
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
    router.push('/login');
  };

  return (
    <header>
      <Link
        href='/'
        className='link'
      >
        Task Tracker
      </Link>
      <div className={styles.headerContainer}>
        <div className={styles.headerUserInfo}>
          <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
          <p>{currentUser.email}</p>
        </div>
        <Link
          className='link'
          href='/account'
        >
          <img
            className={styles.headerUserImage}
            src={currentUser.avatar}
            alt='Profile icon'
          />
        </Link>
        <button
          onClick={handleLogoutUser}
          className='link'
        >
          <BiExit className='h-7 w-7' />
        </button>
      </div>
    </header>
  );
};
export default Header;
