import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header/Header';

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  let token = true;
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/register');
    }
  }, [token]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
