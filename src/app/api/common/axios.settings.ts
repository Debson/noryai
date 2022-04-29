import axios from 'axios';

/** As per requirements, for this application this is the base API
 *  url, meaning that we can specify it for every request. */
const PLACEHOLDER_API_BASE = 'https://dog.ceo/api/';

export const baseApi = axios.create({});

baseApi.interceptors.request.use(config => {
  config.baseURL = PLACEHOLDER_API_BASE;

  return config;
});
