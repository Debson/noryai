import { Center, Flex, Heading, Image, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { ScreenApiResponse } from '../../api/screen/screen.model';
import styles from './dynamic-screen.module.scss';

interface DynamicScreenViewProps {
  pageName?: string;
  dynamicScreenData: ScreenApiResponse;
}

export const DynamicScreenView = ({
  pageName,
  dynamicScreenData,
}: DynamicScreenViewProps) => {
  return (
    <VStack
      as={Flex}
      alignItems="start"
      className={styles.dynamicScreenViewContainer}
      pt={['5rem', '8rem', '10rem']}
    >
      <Heading size="xl">{pageName}</Heading>
      <Center
        className={styles.dynamicScreenViewContent}
        w={{
          sm: '15rem',
          md: '40rem',
          lg: '35rem',
          xl: '35rem',
          '2xl': '40rem',
        }}
        h={{
          sm: '8rem',
          md: '25rem',
          lg: '25rem',
          xl: '23rem',
          '2xl': '25rem',
        }}
      >
        <Image
          p="0.5rem"
          src={dynamicScreenData.message}
          alt="Cute Dog"
          boxSize="full"
          objectFit="scale-down"
        />
        <Link rel="preload" as="image" href={dynamicScreenData.message} />
      </Center>
    </VStack>
  );
};
