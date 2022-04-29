import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { HomeApiResponse } from '../../api/home/home.model';

interface HomeViewProps {
  homeScreenData: HomeApiResponse;
}

export const HomeView = ({ homeScreenData }: HomeViewProps) => {
  return (
    <Box>
      <Heading size="lg">Cute Dog</Heading>
      <img
        src={homeScreenData.message}
        alt="Cute Dog"
        width={400}
        height={300}
      />
    </Box>
  );
};
