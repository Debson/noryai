import {
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ScreenApiResponse } from '../../api/screen/screen.model';
import styles from './dynamic-screen.module.scss';

interface DynamicScreenViewProps {
  pageName?: string;
  dynamicScreenData: ScreenApiResponse;
  isLoading?: boolean;
}

export const DynamicScreenView = ({
  pageName,
  dynamicScreenData,
  isLoading,
}: DynamicScreenViewProps) => {
  return (
    <VStack
      as={Flex}
      w="full"
      alignItems={{ base: 'center', md: 'start' }}
      pt={{ base: '0', sm: '1rem', md: '6.5rem' }}
    >
      <VStack
        as={Flex}
        w={{
          base: '95%',
          sm: '95%',
          md: '95%',
          lg: '60%',
          xl: '40%',
          '2xl': '30%',
        }}
        h={{
          base: '15rem',
          sm: '25rem',
          md: '25rem',
          lg: '20rem',
          xl: '20rem',
          '2xl': '23rem',
        }}
      >
        <Heading size="xl" w="full" data-testid="dynamic-screen-header">
          {pageName}
        </Heading>
        <Center w="full" h="full" className={styles.dynamicScreenViewContent}>
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            <Image
              p="0.5rem"
              src={dynamicScreenData.message}
              alt="Cute Dog Picture"
              boxSize="full"
              objectFit="scale-down"
              data-testid="dynamic-screen-image"
            />
          )}
          <Link rel="preload" as="image" href={dynamicScreenData.message} />
        </Center>
      </VStack>
    </VStack>
  );
};
