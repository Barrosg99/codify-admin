/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

const authProvider = {
  login: ({ username, password }) => axios
    .post(`${process.env.REACT_APP_URL_API}/users/sign-in`, { username, password })
    .then(({ data }) => {
      localStorage.setItem('auth', data);
    })
    .catch((err) => { throw new Error(err.response.data.error); }),
  checkError: (error) => {
    const { status } = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject({ message: 'Authentication token is no longer valid, please login again' });
    }
    return Promise.resolve();
  },
  checkAuth: () => (localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()),
  logout: () => {
    const token = localStorage.getItem('auth');
    if (!token) return Promise.resolve();
    return axios
      .post(`${process.env.REACT_APP_URL_API}/users/sign-out`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => localStorage.removeItem('auth'))
      .catch((err) => { throw new Error(err.response.data.error); });
  },
  getIdentity: () => {
    const id = 1;
    const fullName = 'Admin';
    const avatar = '/images/favicon.ico';
    return Promise.resolve({ id, fullName, avatar });
  },
  getPermissions: () => Promise.resolve(),

};

export default authProvider;
