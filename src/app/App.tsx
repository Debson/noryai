import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { default as colors, default as fonts } from './app.module.scss';
import { AppRoutes } from './modules/routes';

const breakpoints = {
  sm: '320px',
  md: '769px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const chakraCustomTheme = extendTheme({
  breakpoints,
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

const App: React.FC = () => (
  <ChakraProvider theme={chakraCustomTheme}>
    <AppRoutes />
  </ChakraProvider>
);

export default App;
