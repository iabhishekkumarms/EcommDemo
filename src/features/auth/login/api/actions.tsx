import {LoginReq} from './api.types';
import {CALL_LOGIN_API} from './constants';

export const callLoginApi = (data: LoginReq) => {
  return {
    type: CALL_LOGIN_API,
    payload: data,
  };
};
