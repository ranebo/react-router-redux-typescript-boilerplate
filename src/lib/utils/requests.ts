import { STORED_AUTH_TOKEN } from 'constants/app';
import request from 'superagent-bluebird-promise';
// import { logout } from 'store/actions';

export function internalLogin(dispatch, userInfo) {
  localStorage.setItem(STORED_AUTH_TOKEN, userInfo.token);
  // dispatch(setCurrentUser(userInfo));
}

export const getAuthToken = () => `JWT ${ localStorage.getItem(STORED_AUTH_TOKEN) }`;

/*
checkForAuthToken: Helper function to set JWT
- Currently only really used for login requests
- 'requireAuth' function checks url token and sends login request
- All other routes should never have token attached
  as long as component is wrapped with 'requireAuth'
- May have use later to login user with url token on pages
  that don't actually need 'requireAuth' wrapped around them
- Can also use to update token expiration time
*/

const checkForAuthToken = (res, dispatch) => {
  if (res.hasOwnProperty('body') && res.body.hasOwnProperty('token')) {
    const userInfo = JSON.parse(JSON.stringify(res.body));
    if (res.body.hasOwnProperty('resource')) {
      res.body = res.body.resource;
      delete userInfo.resource;
    }
    if (dispatch) {
      internalLogin(dispatch, userInfo);
    }
  }
  return Promise.resolve(res);
};

// Global Handle Server Errors by status code
const handleServerErrors = (err, dispatch) => {
  if (dispatch && err.hasOwnProperty('status')) {
    if (err.status === 403) {
      return dispatch(/*logout()*/);
    }
  }
  return Promise.reject(err);
};

export const get = (url, dispatch, customToken) => {
  const token = customToken || getAuthToken();
  return request
    .get(url)
    .withCredentials()
    .set('Authorization', token)
    .then(res => checkForAuthToken(res, dispatch))
    .catch(err => handleServerErrors(err, dispatch));
};

export const post = (url, data, dispatch, customToken) => {
  const token = customToken || getAuthToken();
  return request
    .post(url)
    .send(data)
    .withCredentials()
    .set('Authorization', token)
    .then(res => checkForAuthToken(res, dispatch))
    .catch(err => handleServerErrors(err, dispatch));
};

export const put = (url, data, dispatch, customToken) => {
  const token = customToken || getAuthToken();
  return request
    .put(url)
    .send(data)
    .withCredentials()
    .set('Authorization', token)
    .then(res => checkForAuthToken(res, dispatch))
    .catch(err => handleServerErrors(err, dispatch));
};

export const del = (url, data, dispatch, customToken) => {
  const token = customToken || getAuthToken();
  return request
    .del(url)
    .send(data)
    .withCredentials()
    .set('Authorization', token)
    .then(res => checkForAuthToken(res, dispatch))
    .catch(err => handleServerErrors(err, dispatch));
};
