import axios from 'axios';
import { getCookie, setCookie } from './cookie';

const reissue = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Refresh-Token': `${getCookie('Refresh')}`,
  },
  // withCredentials: true,
});

// const Access = getCookie('Access');

// if (Access !== null) {
//   const ReissueToken = Access.substring(7);
//   axios.defaults.headers.common['Access_Token'] = ReissueToken
//     ? `${ReissueToken}`
//     : null;
//   console.log(ReissueToken);
// }

export default reissue;

reissue.interceptors.request.use(
  (config) => {
    const Access_Token = getCookie('Access');
    if (Access_Token !== null) {
      config.headers['Access_Token'] = Access_Token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

reissue.interceptors.response.use(
  (response) => {},
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
