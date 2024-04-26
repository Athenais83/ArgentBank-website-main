export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const logout = () => ({
  type: LOGOUT,
});

