import { Center, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeApiResponse } from '../../api/home/home.model';
import styles from './home.module.scss';

interface HomeViewProps {
  homeScreenData: HomeApiResponse;
}

export const HomeView = ({ homeScreenData }: HomeViewProps) => {
  return (
    <VStack as={Flex} alignItems="start" pt="136">
      <Heading size="lg">Cute Dog</Heading>
      <Center className={styles.homeViewContent}>
        <Image
          src={homeScreenData.message}
          alt="Cute Dog"
          boxSize="full"
          objectFit="scale-down"
        />
      </Center>
    </VStack>
  );
};
