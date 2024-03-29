import type { ReactElement } from 'react';
import * as React from 'react';

import HomePage from '@/modules/HomePage';
import { DefaultLayout } from '@/shared/hocs';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Home(): ReactElement {
  const seoData = {
    templateTitle: 'Home',
    image: '/images/home-page/casual.png',
  };

  return (
    <DefaultLayout withNavbar withFooter seoData={seoData}>
      <HomePage />
    </DefaultLayout>
  );
}
