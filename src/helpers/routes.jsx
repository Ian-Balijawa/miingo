import { Navigate, Route } from 'react-router-dom';

import React from 'react';

export function IsUserNavigate({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) return children;

        if (user) {
          return <Navigate to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Navigate to={{ pathname: 'signin', state: { from: location } }} />
          );
        }

        return null;
      }}
    />
  );
}
