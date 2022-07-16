import { server_url } from '../config/appConfig';

//TODO AUTH URL

export const login_url = `${server_url}/api/signin`;

export const signup_url = `${server_url}/api/register`;

export const logout_url = `${server_url}/api/logout`;

export const forgot_password_url = `${server_url}/api/forgot`;

export const reset_password_url = (token:string) =>
  `${server_url}/api/reset/:${token}`;


//TODO POST

///postCreate
export const createPost_url = `${server_url}/api/postCreate`;
