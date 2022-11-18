import axios from 'axios';

// create an axios instance
const service = axios.create({
  // TBD... more config options
  timeout: 10000,
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {},
});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
