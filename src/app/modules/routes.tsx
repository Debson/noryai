import { Flex, HStack, Spinner, useMediaQuery, VStack } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  appNavBarFooterItemData,
  appNavBarHeaderItemData,
  appNavItemsData,
} from '../app.fixtures';
import { NavBar } from '../components/nav-bar/nav-bar.component';
const DynamicScreenContainer = React.lazy(
  () => import('./dynamic-screen/dynamic-screen.container')
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar
          headeritem={appNavBarHeaderItemData}
          navBarItems={appNavItemsData}
          footerItem={appNavBarFooterItemData}
        />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/*" element={<DynamicScreenContainer />} />
          </Routes>
        </Suspense>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-device-width: 768px)');
  if (isMobile) {
    return (
      <VStack as={Flex} h="full" w="full" spacing="2rem" alignItems="start">
        {children}
      </VStack>
    );
  }

  return (
    <HStack as={Flex} h="full" w="full" spacing="2rem" alignItems="start">
      {children}
    </HStack>
  );
};
