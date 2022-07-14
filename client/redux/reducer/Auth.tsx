import { LOADING, AUTH_STATUS } from '../constants/Auth';
import { AuthActionType } from '../types/Auth';
interface auth {
  isLoading: boolean;
  authStatus: any;
}

const initialState = {
  isLoading: false,
  authStatus: {},
};

const authReducer = (state = initialState, action: AuthActionType): auth => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
