import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useApi } from '../../api/common/api-hooks';
import { fetchScreen } from '../../api/screen/screen.api';
import { useScreenState } from '../../store/screen/utils';
import { DynamicScreenView } from './dynamic-screen.view';

const DynamicScreenContainer = () => {
  const { pageName } = useScreenState();

  const { data: dynamicScreenData, isLoading: isDynamicScreenDataLoading } =
    useApi(fetchScreen, [pageName]);

  return (
    <Flex w="full">
      {dynamicScreenData ? (
        <DynamicScreenView
          pageName={pageName}
          isLoading={isDynamicScreenDataLoading}
          dynamicScreenData={dynamicScreenData}
        />
      ) : (
        <React.Fragment />
      )}
    </Flex>
  );
};

export default DynamicScreenContainer;
