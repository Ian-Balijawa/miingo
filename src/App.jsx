/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { actions, state } from './state';

import ActivityCard from './components/profile/ActivityCard';
import Gallery from './components/Album/ImageGallery';
import LoadingScreen from './components/LoadingScreen';
import NewProfilePage from './pages/Profile_Page';
import StatusCarousel from './components/StatusCarousel';
import api from './services/axios-config';
import { devtools } from 'valtio/utils';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';

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
  const [accessToken] = useLocalStorage('accessToken');

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
        location.pathname !== '/signin' ||
        location.pathname !== '/signup' ||
        location.pathname !== '/'
      ) {
        api
          .get('/auth/refresh-token', {
            headers: {
              Authorization: `Bearer ${accessToken}`
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
  }, [accessToken, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="ld" element={<NewProfilePage />} />
        <Route path="ad" element={<ActivityCard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="status" element={<StatusCarousel />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="feed"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="messages"
          element={
            <RequireAuth>
              <Messages />
            </RequireAuth>
          }
        />

        <Route
          path="group_messages"
          element={
            <RequireAuth>
              <GroupMessages />
            </RequireAuth>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="groups"
          element={
            <RequireAuth>
              <GroupFeeds />
            </RequireAuth>
          }
        />

        <Route
          path="groups/:id"
          element={
            <RequireAuth>
              <GroupFeeds />
            </RequireAuth>
          }
        />

        <Route
          path="feed"
          element={
            <IsUserNavigate user={state.user} loggedInPath="/feed">
              <Home />
            </IsUserNavigate>
          }
        />
      </Routes>
    </>
  );
};

const RequireAuth = ({ children }) => {
  const [user] = useLocalStorage('user');

  return user ? children : <Navigate to="/signin" />;
};

const IsUserNavigate = ({ children, loggedInPath, ...rest }) => {
  const [user] = useLocalStorage('user');

  return (
    <Route
      {...rest}
      element={user ? <Navigate to={loggedInPath} /> : children}
    />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const [user] = useLocalStorage('user');

  return (
    <Route {...rest} element={user ? children : <Navigate to="/signin" />} />
  );
};
