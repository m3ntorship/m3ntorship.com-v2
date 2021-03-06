import { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import '@/styles/globals.css';
import 'm3ntorship-ui/dist/m3ntorship-ui.esm.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
