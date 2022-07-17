import * as types from '../constant/Post';

const postReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };

    case types.POST_FAILURE:
      return {
        ...state,
        postData: null,
      };

    case types.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    // types.LOADING;
    default:
      return state;
  }
};

export default postReducer;