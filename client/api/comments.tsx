import axios from 'axios';

import {
  createPost_url,
  authPost_url,
  likePost_url,
  DeletePost_url,
  deletelike_url,
  comment_url,
  dislike_comment_url,
  like_comment_url,
} from '../constant/apiUrl';
axios.defaults.withCredentials = true;

export const createComments = (id: string, packet: any) =>
  axios
    .post(comment_url(id), packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });


    
export const getComments = (id: string) =>
  axios
    .get(comment_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const authPost = () =>
  axios
    .get(authPost_url)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const Likepost = (id: string) =>
  axios
    .put(likePost_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const RemoveLike = (id: string) =>
  axios
    .put(deletelike_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const DeletePost = (id: string) =>
  axios
    .delete(DeletePost_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
