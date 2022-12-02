export const getTokenPayload = (accessToken) =>
  JSON.parse(window.atob(accessToken.split('.')[1]));
