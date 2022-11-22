/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import LoadingScreen from './components/LoadingScreen';
import React from 'react';
import RequireAuth from './services/RequireAuth';

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
const Layout = Loadable(lazy(() => import('./pages/Layout')));

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="feed" element={<Home />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </>
  );
};
