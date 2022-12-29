import axios from 'axios';
import { getToken, removeToken } from './auth';
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
  // TBD... more config options
  timeout: 20000,
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  // baseURL: 'http://localhost:8000/',
  headers: {},
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // async (config) => {
      //   if (isTokenExpired('access_token')) {
        //     const response = await getRefreshToken();
        //     await refreshAccessToken(response);
        //   }
    const token = getToken()
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const status = response.status
    if (status >= 400) {
      ElMessage({
        message: response.data.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(response.data.message || 'Error'))
    } else {
      return response
    }
  },
  error => {
    console.log('err:' + error) // for debug
    // logout if token is invalid
    if (typeof error.response.data.code !== 'undefined' && error.response.data.code === 'token_not_valid') {
      removeToken()
      window.location.reload()
    }
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
);

export default service;
