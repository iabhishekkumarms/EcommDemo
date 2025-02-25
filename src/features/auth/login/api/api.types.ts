/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */

// export interface LoginReq {
//   username: string;
//   password: string;
//   expireInMins: string;
// }

// export interface UserObj {
//   accessToken: string;
//   refreshToken: string;
//   id: number;
//   username: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   gender: string;
//   image: string;
// }

// export interface LoginRes {
//   data?: UserObj; // The 'user' object is returned in case of a successful login
//   message?: string; // 'msg' is returned in case of an error
// }

export interface LoginReq {
  username: string;
  password: string;
  expireInMins: string;
}

export interface UserObj {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

// Success Response
export interface LoginSuccessRes {
  success: true;
  data: UserObj;
}

// Error Response
export interface LoginErrorRes {
  success: false;
  message: string;
}

// Union Type for Response
export type LoginRes = LoginSuccessRes | LoginErrorRes;
