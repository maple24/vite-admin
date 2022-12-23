import axios from 'axios';
import { useUserStore } from '@/store/user';
const store = useUserStore()

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
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${store.token}`
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use();

export default service;
