import axios from 'axios';

import { like_url } from '../constant/apiUrl';

axios.defaults.withCredentials = true;

export const likePost = (id: string) =>
  axios
    .post(like_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const dislikePost = (id: string) =>
  axios
    .delete(like_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const getAlllikes = (id: string) =>
  axios
    .get(like_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
