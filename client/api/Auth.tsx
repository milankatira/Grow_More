import axios from 'axios';
import { login_url, signup_url, Auth_user } from '../constant/apiUrl';
import { ILogin, Isignup } from '../interface/form/Auth';

axios.defaults.withCredentials = true;

export const LoginApi = (packet: ILogin) =>
  axios
    .post(login_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const SignupApi = (packet: Isignup) =>
  axios
    .post(signup_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const AuthUserApi = () =>
  axios
    .get(Auth_user)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
