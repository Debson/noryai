import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { AppRoutes } from './modules/routes';

const App = () => {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
