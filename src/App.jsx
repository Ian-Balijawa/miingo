/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from './components/LoadingScreen';
import axios from './services/axios-config';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Notice the convention of how we're importing pagesing with the Loadable HOC
const Signin = Loadable(lazy(() => import('./pages/Login')));
const Signup = Loadable(lazy(() => import('./pages/Register')));
const Home = Loadable(lazy(() => import('./pages/Home')));
const Messages = Loadable(lazy(() => import('./pages/Messages')));
const GroupFeeds = Loadable(lazy(() => import('./pages/GroupFeeds')));

export default () => {
  const [token] = useLocalStorage('token');
  console.log('TOKEN: ============>', token);
  useEffect(() => {
    setInterval(() => {
      axios
        .get('/auth/refresh-token', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          const data = res.data;
          console.log('RES: ', data);
          const user = {
            ...data.user,
            token: data.accessToken
          };
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(user.token));
        });
    }, 50 * 60000);
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Signup />} />
        <Route
          path="feed"
          element={
            <RequireAuth redirectTo="/login">
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="messages"
          element={
            <RequireAuth redirectTo="/login">
              <Messages />
            </RequireAuth>
          }
        />

       <Route
          path="groups"
          element={
            <RequireAuth redirectTo="/login">
              <GroupFeeds />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

const RequireAuth = ({ children, redirectTo }) => {
  const [user, _] = useLocalStorage('user');

  return user ? children : <Navigate to={redirectTo} />;
};
