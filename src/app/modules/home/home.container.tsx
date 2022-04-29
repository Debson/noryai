import React from 'react';
import { useApi } from '../../api/common/api-hooks';
import { fetchHomeScreen } from '../../api/home/home.api';
import { HomeView } from './home.view';

const HomeContainer = () => {
  const { data: homeScreenData, isLoading: isHomeScreenDataLoading } = useApi(
    fetchHomeScreen,
    []
  );

  return homeScreenData && !isHomeScreenDataLoading ? (
    <HomeView homeScreenData={homeScreenData} />
  ) : (
    <React.Fragment />
  );
};

export default HomeContainer;
