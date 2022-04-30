import { Flex, HStack, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  appNavBarFooterItemData,
  appNavBarHeaderItemData,
  appNavItemsData,
} from '../app.fixtures';
import { NavBar } from '../components/nav-bar/nav-bar.component';
const HomeContainer = React.lazy(() => import('./home/home.container'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HStack as={Flex} h="full" w="full" spacing="3rem" alignItems="start">
        <NavBar
          headeritem={appNavBarHeaderItemData}
          navBarItems={appNavItemsData}
          footerItem={appNavBarFooterItemData}
        />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
          </Routes>
        </Suspense>
      </HStack>
    </BrowserRouter>
  );
};
