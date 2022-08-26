import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import Loader from '../components/Loader/Loader';
import UserCard from '../components/UserCard/UserCard';
import useCheckIsUserLoggedIn from '../hooks/useCheckUserLogin';
import { getAllUsers } from '../store/actions/getAllUsersAction';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.allUsers.allUsers);
  const isLoading = useSelector(state => state.allUsers.allUsersLoading);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (users) {
      setAllUsers(users);
    }
  }, [users]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name='Task Tracker App'
          content='Complex user app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Layout>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <section className='home'>
              {allUsers.map(user => (
                <UserCard
                  user={user}
                  key={user.id}
                />
              ))}
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
