import React, { useEffect, useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logoutUser } from '../../store/actions/userActions';

import { defaultImageUrl, defaultUser } from '../../utils/constants';
import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [currentUser, setCurrentUser] = useState(defaultUser);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <Link
        href='/'
        className='link'
      >
        Complex Task Tracker
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
            src={currentUser.avatar || defaultImageUrl}
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
