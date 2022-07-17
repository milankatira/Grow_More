import * as types from '../constant/Post';

export const setLoading = (data: any) => ({
  type: types.LOADING,
  payload: data,
});


export const setPostSuccess = (data: { type: string; payload: any }) => {
  return {
    type: types.POST_SUCCESS,
    payload: data,
  };
};



export const setPostFailure = () => {
  return {
    type: types.POST_SUCCESS,
  };
};



