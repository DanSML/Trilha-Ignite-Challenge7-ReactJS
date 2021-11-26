import { ChakraProvider } from '@chakra-ui/react';
import {AppProps} from 'next/app';
import { theme } from '../../styles/theme';
import { ContinentsContextProvider } from '../contexts/ContinentsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsContextProvider>
        <Component {...pageProps} />
      </ContinentsContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
