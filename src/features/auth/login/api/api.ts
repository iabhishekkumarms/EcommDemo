import {api} from 'src/api/api';
import {LoginReq, LoginRes} from './api.types';
import {endPoints} from './endPoints';

export const fetchLoginData = async (data: LoginReq) => {

  try {
    const res = await api.post<LoginRes>(endPoints.auth.logIn, data);
    console.log('Login success from API file', res);
    return res; // Ensure we return the correct response format
  } catch (error: any) {
    // Extract error message from server response
    const errorMessage = error.message || 'Something went wrong';
    throw new Error(errorMessage); // Ensure an error message string is thrown
  }
};
