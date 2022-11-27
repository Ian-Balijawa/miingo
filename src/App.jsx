/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from './components/LoadingScreen';
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
const GroupFeeds = Loadable(lazy(()=> import("./pages/GroupFeeds")))

export default () => {
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

const IsUserRedirect = ({ children, user, loggedInPath, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Navigate to={loggedInPath} />;
        }

        return null;
      }}
    />
  );
};

const ProtectedRoute = ({ children, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Navigate
              to={{
                pathname: 'login',
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
