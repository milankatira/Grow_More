let store;

export const injectStore = (_store) => {
  store = _store;
};

const API_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to set token before each request.
api.interceptors.request.use((config) => {
  const auth = store.getState().auth || null;
  if (auth) {
    config.headers['access-token'] = auth.token;
    config.headers['client'] = auth.client;
    config.headers['uid'] = auth.uid;
  }
  if (config?.urlParams && typeof config?.url?.replace === 'function') {
    Object.entries(config.urlParams || {}).forEach(([key, value]) => {
      config.url = config.url.replace(`:${key}`, value); // encodeURIComponent()
    });
  }
  return config;
});

export const endpoints = {
  SIGN_UP: '/api/register',
};

export default api;``
