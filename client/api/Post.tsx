import axios from 'axios';

import {
  createPost_url,
  authPost_url,
  likePost_url,
  DeletePost_url,
} from '../constant/apiUrl';
axios.defaults.withCredentials = true;

export const createPost = (packet: any) =>
  axios
    .post(createPost_url, packet)
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


export const DeletePost = (id: string) =>
  axios
    .delete(DeletePost_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });