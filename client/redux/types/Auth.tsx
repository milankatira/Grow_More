import { LOADING, AUTH_STATUS } from '../constants/Auth';

export interface AUTH_STATUS {
  type: typeof AUTH_STATUS;
  payload: any;
}

export interface LOADING {
  type: typeof LOADING;
  payload: any;
}

export type AuthActionType = AUTH_STATUS | LOADING;
