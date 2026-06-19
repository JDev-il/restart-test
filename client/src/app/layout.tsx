import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/lib/theme';
import { store } from '@/lib/store';
import './globals.scss';

export const metadata: Metadata = {
  title: 'MarketMind — AI Stock Predictions',
  description: 'AI-powered stock market trend prediction and investment recommendations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
