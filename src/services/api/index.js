import axios from 'axios';
import qs from 'qs';
// import store from '../store';
// import { openNotification } from '../store/actions/noti';
// import { getStorage, hasStorage } from './storage';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const request = options => {
  // if (hasStorage('authToken')) {
  //   const token = getStorage('authToken');
  //   client.defaults.headers.common['authorization'] = token;
  // } else {
  //   delete client.defaults.headers.common['authorization'];
  // }
  return client(options)
    .then(response => response.data)
    .catch(error => {
      // errorHandler(error);
      throw (error.response && error.response.data) || error.message || 'SERVER_ERROR';
    });
};

// const errorHandler = error => {
//   const dispatch = store.dispatch;
//   if (error.response && error.response.status) {
//     const msg = error.response.data?.error;
//     if (error.response.status === 404) {
//       dispatch(openNotification({ msg: msg || 'Not Found', type: 'error' }));
//     } else if (error.response.status === 401) {
//       dispatch(openNotification({ msg: msg || 'Unauthorized', type: 'error' }));
//       // if (error.response.data?.code === 'invalid_token') {
//       //   dispatch(logOut());
//       // }
//     } else {
//       dispatch(openNotification({ msg: msg || 'Server Error', type: 'error' }));
//     }
//   } else {
//     dispatch(openNotification({ msg: 'Server Error', type: 'error' }));
//   }
// };

export const get = (url, params) => request({ url, method: 'get', params });

export const post = (url, data) => request({ url, method: 'post', data });

export const put = (url, data) => request({ url, method: 'put', data: qs.stringify(data) });

export const patch = (url, data) => request({ url, method: 'patch', data: qs.stringify(data) });

export const remove = url => request({ url, method: 'delete' });

export const fileUpload = (url, data, method = 'post') => {
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return request({
    url,
    data: formData,
    method,
    headers: { 'content-type': 'multipart/form-data' }
  });
};
