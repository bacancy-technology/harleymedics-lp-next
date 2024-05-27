import axios from 'axios';
import { API_HOST } from '../env';
import { HeadersWithAuth, HeadersWithoutAuth, logout } from '../utils/helpers';

axios.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = localStorage.getItem('token');
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // return Promise.reject(error);
    throw error;
  }
);

export const get = (url, params, isAuth = false, token = null, config = {}) => {
  let setHeader = isAuth ? HeadersWithAuth(token) : HeadersWithoutAuth();
  setHeader = { ...setHeader, ...config };
  return axios
    .get(API_HOST + url, {
      headers: setHeader,
      params: params,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => handleError(error));
};

export const handleError = (error) => {
  // will implement this based on api error

  if (error?.response?.status === 401) {
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  }
  throw error.response;
};
