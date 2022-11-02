import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// export const setCookie = (name, value, option) => {
//   return cookies.set(name, value, { ...option });
// };

export const setCookie = (name, value, exp) => {
  let time = new Date();
  time.setMinutes(time.getMinutes() + exp);
  return cookies.set(name, value, { expires: time });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};
