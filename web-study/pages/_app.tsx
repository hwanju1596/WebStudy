import '../styles/globals.css'
import * as React from 'react';
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/util/createEmotionCache';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache(); 

function MyApp({ Component, pageProps }: AppProps, emotionCache = clientSideEmotionCache) {
  return 
  (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          test
        </title>
      </Head>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
       <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
