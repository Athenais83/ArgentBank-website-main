import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../redux/actions';
import { loginApi } from '../redux/api';

export const loginMiddleware = store => next => async action => {
  if (action.type === LOGIN_REQUEST) {
    try {
      const { username, password } = action.payload;
      const data = await loginApi(username, password);
      store.dispatch(loginSuccess(data.token, username));
    } catch (error) {
      store.dispatch(loginFailure(error));
    }
  }

  return next(action);
};