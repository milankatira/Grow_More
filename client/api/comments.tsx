import axios from 'axios';

import {
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
