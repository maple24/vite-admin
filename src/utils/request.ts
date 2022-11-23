import axios from 'axios';

// create an axios instance
const service = axios.create({
  // TBD... more config options
  timeout: 20000,
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  // baseURL: 'http://localhost:8000/',
  headers: {},
});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
