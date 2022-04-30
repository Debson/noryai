import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useApi } from '../../api/common/api-hooks';
import { fetchScreen } from '../../api/screen/screen.api';
import { useScreenState } from '../../store/screen/utils';
import styles from './dynamic-screen.module.scss';
import { DynamicScreenView } from './dynamic-screen.view';

const DynamicScreenContainer = () => {
  const { pageName } = useScreenState();

  const { data: dynamicScreenData, isLoading: isDynamicScreenDataLoading } =
    useApi(fetchScreen, [pageName]);

  return (
    <Flex className={styles.dynamicScreenContainer} w="full">
      {dynamicScreenData && !isDynamicScreenDataLoading ? (
        <DynamicScreenView
          pageName={pageName}
          dynamicScreenData={dynamicScreenData}
        />
      ) : (
        <React.Fragment />
      )}
    </Flex>
  );
};

export default DynamicScreenContainer;
