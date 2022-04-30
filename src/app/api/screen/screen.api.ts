import { baseApi } from '../common/axios.settings';
import { ScreenApiResponse } from './screen.model';

const SCREEN_DATA_ENDPOINT = 'breeds/image/random';

export const fetchScreen = () =>
  baseApi
    .get<ScreenApiResponse>(SCREEN_DATA_ENDPOINT)
    .then(response => response.data);
