import '../styles/globals.css'; // TODO: Check if we can use baseui global styles
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, BaseProvider, styled } from 'baseui';
import { Block } from 'baseui/block';
import { styletron } from '../styletron';
import { THEMES } from '../constants';
import Header from '../components/Header';

const AppWrapper = styled('div', ({ $theme }) => {
  return {
    backgroundColor: $theme.name === THEMES.light ? '#fff' : '#141414',
    minHeight: '100vh',
    minWidth: '100vw',
    overflow: 'hidden',
  };
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(THEMES.light);

  useEffect(() => {
    const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(preferedTheme.matches ? THEMES.dark : THEMES.light);

    const switchTheme = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setTheme(THEMES.dark);
      } else {
        setTheme(THEMES.light);
      }
    };

    preferedTheme.addEventListener('change', switchTheme);

    return () => {
      preferedTheme.removeEventListener('change', switchTheme);
    };
  }, []);

  const handleChangeTheme = (themeName: THEMES) => {
    setTheme(themeName);
  };

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme === THEMES.light ? LightTheme : DarkTheme}>
        <AppWrapper>
          <Header onToggleTheme={handleChangeTheme} />
          <Block width={['100%', '480px', '540px', '960px']} margin="0 auto">
            <Component {...pageProps} />
          </Block>
        </AppWrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
