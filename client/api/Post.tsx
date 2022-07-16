import axios from 'axios';
import { createPost_url } from '../constant/apiUrl';

export const createPost = (packet:any) =>
  axios
    .post(createPost_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });


    