import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('auth');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(process.env.REACT_APP_URL_API, httpClient);

export default dataProvider;
