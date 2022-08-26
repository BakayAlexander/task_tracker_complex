import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import useCheckIsUserLoggedIn from '../../hooks/useCheckUserLogin';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(useCheckIsUserLoggedIn());
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
