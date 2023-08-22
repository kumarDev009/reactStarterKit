import { COOKIES_EXPIRATION_DAYS } from '../constants';

const store = window.localStorage;

export const getStorage = key => {
  try {
    return JSON.parse(store.getItem(key));
  } catch (e) {
    return null;
  }
};

export const setStorage = (key, value) => store.setItem(key, JSON.stringify(value));

export const removeStorage = key => store.removeItem(key);

export const clearAll = () => store.clear();

export const hasStorage = key => {
  const item = getStorage(key);
  return !!item;
};

export const getCookie = cname => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    c = c.trim();
    if (c.indexOf(name) === 0) {
      setCookie(cname, c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

export const setCookie = (cname, cvalue) => {
  let date = new Date();
  date.setTime(date.getTime() + COOKIES_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);
  const value = encodeURIComponent(cvalue);
  document.cookie = `${cname}=${value};expires=${date.toGMTString()};SameSite=Strict;path=/;Domain=${
    window.location.hostname
  };`;
};

export const deleteCookie = cname => {
  document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Strict;path=/;Domain=${window.location.hostname};`;
};
