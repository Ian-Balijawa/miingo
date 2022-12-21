import "./index.css";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "react-app-polyfill/jsdom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Signin = Loadable(lazy(() => import("./pages/Login")));
const Signup = Loadable(lazy(() => import("./pages/Register")));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={ <Signin />} />
          <Route path="signin" element={ <Signin />} />
          <Route path="signup" element={ <Signup />} />
          <Route path="/*" element={ <App /> } />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
