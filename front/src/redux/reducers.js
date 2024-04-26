import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions';

const initialState = {
  token: null,
  username: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: null };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, username: action.payload.username, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload.error };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;