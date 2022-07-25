import axios from 'axios';

import { suggestedUsers_url } from '../constant/apiUrl';

axios.defaults.withCredentials = true;

export const SuggestedUsersApi = () => {
  return axios
    .get(suggestedUsers_url)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};
