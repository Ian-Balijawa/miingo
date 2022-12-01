/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from './components/LoadingScreen';
import api from './services/axios-config';
import { devtools } from 'valtio/utils';
import { state } from './state';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';
import { useSnapshot } from 'valtio';

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
const GroupMessages = Loadable(lazy(() => import('./pages/GroupMessages')));
const Profile = Loadable(lazy(() => import('./pages/ProfilePage')));

export default () => {
  const location = useLocation();
  const snap = useSnapshot(state);

  useEffect(
    () => () =>
      devtools(state, {
        name: 'MIINGO_STATE',
        enabled: process.env.NODE_ENV !== 'production'
      })
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (
        location.pathname !== 'login' ||
        location.pathname !== '/register' ||
        location.pathname !== '/'
      ) {
        api
          .get('/auth/refresh-token', {
            headers: {
              Authorization: `Bearer ${snap.accessToken}`
            }
          })
          .then((res) => {
            const data = res.data;
            console.log('RES: ', data);

            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem(
              'accessToken',
              JSON.stringify(data.accessToken)
            );
          });
      }
    }, 50 * 60 * 1000);

    return () => clearInterval(intervalID);
  }, [snap.accessToken, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Signup />} />

        <Route
          path="profile"
          element={
            <RequireAuth redirectTo="/login">
              <Profile />
            </RequireAuth>
          }
        />
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
          path="group_messages"
          element={
            <RequireAuth redirectTo="/login">
              <GroupMessages />
            </RequireAuth>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <RequireAuth redirectTo="/login">
              <Profile />
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
  const [user] = useLocalStorage('user');

  return user ? children : <Navigate to={redirectTo} />;
};
