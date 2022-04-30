import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { default as colors, default as fonts } from './app.module.scss';
import { AppRoutes } from './modules/routes';

const chakraCustomTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: colors.colorText,
        height: 'full',
      },
    },
  },
  fonts: {
    heading: fonts.fontBase,
    body: fonts.fontBase,
  },
});

const App = () => (
  <ChakraProvider theme={chakraCustomTheme}>
    <AppRoutes />
  </ChakraProvider>
);

export default App;
