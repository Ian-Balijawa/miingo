import { CheckCircle, Error } from '@material-ui/icons';

import React from 'react';

// import { toast } from "react-toastify";

const ErrorAlert = ({ message }) => {
  return (
    <div className="text-base text-headingtext inline-flex items-center justify-center">
      <span className="text-5xl text-red mr-2">
        <Error fontSize="inherit" />
      </span>
      <div className="flex flex-col text-center justify-center">
        <span className="inline-block align-baseline ">{message}</span>
      </div>
    </div>
  );
};

const NotificationAlert = ({ message }) => {
  return (
    <div className="text-base text-headingtext inline-flex items-center justify-center">
      <span className="text-5xl text-buttonGreen mr-2">
        <CheckCircle fontSize="inherit" />
      </span>
      <span className="inline-block align-baseline w-full ">{message}</span>
    </div>
  );
};

export default function CustomAlert({
  alertType,
  alertMessage,

  autoClose = 5000,
  hideProgressBar = true,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = false
}) {
  let position;
  alertType === 'error'
    ? (position = 'bottom-left')
    : (position = 'bottom-right');
  const alertComponent = () => {
    if (alertType === 'error') return <ErrorAlert message={alertMessage} />;
    if (alertType === 'success')
      return <NotificationAlert message={alertMessage} />;
  };
  // toast(alertComponent(), {
  // 	position,
  // 	autoClose,
  // 	hideProgressBar,
  // 	closeOnClick,
  // 	pauseOnHover,
  // 	draggable,
  // 	progress,
  // });
}
