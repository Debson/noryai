import { baseApi } from '../common/axios.settings';
import { HomeApiResponse } from './home.model';

const HOME_PLACEHOLDER_ENDPOINT = 'breeds/image/random';

export const fetchHomeScreen = () =>
  baseApi
    .get<HomeApiResponse>(HOME_PLACEHOLDER_ENDPOINT)
    .then(response => response.data);
