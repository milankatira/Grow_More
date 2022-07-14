import axios from 'axios';
import { LOADING, AUTH_STATUS } from '../constants/Auth';

export const authStatus = (data: any) => ({
  type: AUTH_STATUS,
  payload: data,
});

export const loading = (data: any) => ({
  type: LOADING,
  payload: data,
});

export const login = (data: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  
    dispatch(loading(true));
    const res = await axios.post('/api/auth/login', data);
    dispatch(loading(false));
    dispatch(authStatus(res.data));
};
