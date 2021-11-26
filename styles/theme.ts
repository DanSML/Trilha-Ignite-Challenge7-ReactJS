import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    light: {
      'heading': '#F5F8FA',
      'white': '#FFFFFF',
      'info': '#DADADA'
    },
    dark: {
      'black': '#000000',
      'heading': '#47585B',
      'info': '#999999'
    },
    highlight: {
      'base': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'light.white',
        color: 'dark.heading'
      }
    }
  }
})