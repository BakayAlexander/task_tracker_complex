import Head from 'next/head';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout/Layout';
import useCheckIsUserLoggedIn from '../hooks/useCheckUserLogin';

const Home = () => {
  // const allUsers = useSelector(state => state.allUsers.allUsers);
  // const isLoading = useSelector(state => state.allUsers.allUsersLoading);
  // const totalPages = useSelector(state => state.allUsers.totalPages);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

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
          {/* {isLoading ? (
            <Loader />
          ) : ( */}
          <section className='home'>
            {/* {allUsers.map(user => (
              <UserCard
                key={user.id}
                name={user.first_name}
                surname={user.last_name}
                email={user.email}
                imageUrl={user.avatar}
              />
            ))} */}
          </section>
          {/* )} */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
