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
import { useSnapshot } from 'valtio';
import { getTokenPayload } from './utils/getTokenPayload';

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
  //const { accessToken } = useSnapshot(state);
  actions.setAccessToken(localStorage.getItem('accessToken'));
  

  useEffect(
    () => () => {
      devtools(state, {
        name: 'MIINGO_STATE',
        enabled: process.env.NODE_ENV !== 'production'
      })
     
    }
  );

  // useEffect(() => {

  //   if (accessToken) {
  //     const { exp: tokenEXp, iat } = getTokenPayload(accessToken);
  //     const currentTime = Date.now() / 1000; //time in seconds
  //     console.log('TIME TO EXPIRE', tokenEXp, iat);

  //     //   if (tokenEXp < currentTime - 10) {
  //     //    // localStorage.removeItem('accessToken');
  //     //     if (
  //     //       location.pathname !== '/signin' ||
  //     //       location.pathname !== '/signup' ||
  //     //       location.pathname !== '/'
  //     //     ) {
  //     //       api
  //     //         .get('/auth/refresh-token', {
  //     //           headers: {
  //     //             Authorization: `Bearer ${accessToken}`
  //     //           }
  //     //         })
  //     //         .then((res) => {
  //     //           const data = res.data;
  //     //           console.log('RES: ', data);
  //     //           actions.setAccessToken(data.accessToken);
  //     //         });
  //     //     }
  //     //   }
  //     //  // actions.setAccessToken(accessToken);
  //     // }
  //     // actions.setAccessToken(localStorage.getItem('accessToken'))
  //     const intervalID = setInterval(() => {
  //       if (
  //         location.pathname !== '/signin' ||
  //         location.pathname !== '/signup' ||
  //         location.pathname !== '/'
  //       ) {
  //         api
  //           .get('/auth/refresh-token', {
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`
  //             }
  //           })
  //           .then((res) => {
  //             const data = res.data;
  //             console.log('RES: ', data);
  //             actions.setAccessToken(data.accessToken);
  //           });
  //       }
  //     }, ((tokenEXp -iat)*1000) - 3540000);

  //     return () => clearInterval(intervalID);
  //   }
  // }, [accessToken, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signin" element={
       
          <Signin />
       } />
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

        
      </Routes>
    </>
  );
};

const RequireAuth = ({ children }) => {

  const user = localStorage.getItem('me');
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');
  actions.setAccessToken(accessToken);
  console.log('AUTH TOKEN', { user })

  useEffect(() => {
    if (accessToken) {
      const { exp: tokenEXp, iat } = getTokenPayload(accessToken);
       
      const currentTime = Date.now() / 1000; //time in seconds
      if (tokenEXp > currentTime) {


        const intervalID = setInterval(() => {
          console.log('TIME TO EXPIRE', tokenEXp, iat);
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
                actions.setAccessToken(data.accessToken);
              });
          }
        }, ((tokenEXp - iat) * 1000) - 10000);

        return () => clearInterval(intervalID);
      }
    }
}, [accessToken, location.pathname]);
  


  return user ?  children : <Navigate to="/signin" />;
};

const IsUserNavigate = ({ children, loggedInPath, ...rest }) => {
  actions.setAccessToken(localStorage.getItem('accessToken'));
  const { me: user } = useSnapshot(state);

  return (
    <Route
      {...rest}
      element={user ? <Navigate to={loggedInPath} /> : children}
    />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  actions.setAccessToken(localStorage.getItem('accessToken'));
  const { me: user } = useSnapshot(state);

  return (
    <Route {...rest} element={user ? children : <Navigate to="/signin" />} />
  );
};
