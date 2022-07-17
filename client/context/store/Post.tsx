import React, { createContext, useReducer, useContext } from 'react';

import Post from '../reducer/Post';
import { authPost } from '../../api/Post';

import { setLoading, setPostFailure, setPostSuccess } from '../actions/Post';
import Router from 'next/router';

export const Postcontext = createContext();

const initialState = {
  postData: null,
  loading: true,
};

function PostProvider(props) {
  const [PostData, dispatch] = useReducer(Post, initialState);

  const MyPost = () => {
    dispatch(setLoading(true));
    authPost()
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setPostSuccess(res.data.posts));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setPostFailure());
      });
  };

  const Post_api = {
    MyPost,
  };

  const postData = { PostData, dispatch, Post_api };

  return <Postcontext.Provider value={postData} {...props} />;
}

function usePostcontext() {
  return useContext(Postcontext);
}

export { PostProvider, usePostcontext };
