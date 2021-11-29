import { ChakraProvider } from '@chakra-ui/react';
import {AppProps} from 'next/app';
import { theme } from '../../styles/theme';
import { Header } from '../components/Header';
import { ContinentsContextProvider } from '../contexts/ContinentsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsContextProvider>
        <Header w={["100vw"]} h={["50px", "75px"]} />
        <Component {...pageProps} />
      </ContinentsContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
