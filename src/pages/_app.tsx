import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/theme/theme';
import createEmotionCache from '@/config/createEmotionCache';
import MainLayout from '@/components/Layout/MainLayout/MainLayout.component';
import { Provider } from 'react-redux';
import store from '@/@core/infraestructure/redux/store'



// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { ...pageProps };
};