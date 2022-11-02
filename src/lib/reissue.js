import axios from 'axios';
import { getCookie } from './cookie';

const reissue = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Refresh-Token': `${getCookie('Refresh')}`,
  },
});

reissue.interceptors.request.use(
  (config) => {
    const Access_Token = sessionStorage.getItem('Access');
    if (Access_Token !== null) {
      config.headers.Access_Token = Access_Token.substring(7);
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

reissue.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default reissue;
