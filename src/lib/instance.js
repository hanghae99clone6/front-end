import axios from 'axios';
import { getCookie } from './cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 10000,
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${getCookie('Auth')}`,
    'Refresh-Token': `${getCookie('Refresh')}`,
  },
  // withCredentials: true,
});

export default instance;
