import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {ApiConfig} from './apiConfig';
import {getGeneralApiProblem} from './apiProblem';
import reduxStorage from 'src/store/storage';

console.log('API URL:', Config.API_URL);

/**
 * Configuring the axios instance.
 */
const DEFAULT_API_CONFIG: ApiConfig = {
  url: 'https://dummyjson.com',
  timeout: 10000,
};

/**
 * Initialise axio api instance
 */
export const api = axios.create({
  baseURL: `${DEFAULT_API_CONFIG.url}/`,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can modify the request config here (e.g., add headers, authentication token)
    // Retrieve the access token from MMKV storage
    const accessToken = reduxStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log(
      `🚀 Request: ${config.method?.toUpperCase()} ${config.baseURL}${
        config.url
      }`,
    );
    console.log('📩 Request Data:', config.data);
    return config;
  },
  error => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here before it's passed to the component
    console.log('🚀 Response:', response.data);
    return response.data;
  },
  error => {
    // Handle error responses here
    // For more read: https://github.com/axios/axios?tab=readme-ov-file#error-types
    console.error('❌ Response Error:', error);
    const problem = getGeneralApiProblem(error);
    return Promise.reject(problem);
  },
);
