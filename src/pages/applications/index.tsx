import { ReactElement } from 'react';

import ApplicationsPage from '@/modules/ApplicationsPage';
import { DefaultLayout } from '@/shared/hocs';

export default function Applications(): ReactElement {
  const seoData = {
    templateTitle: 'Application',
    image: '/images/home-page/casual.png',
  };

  return (
    <DefaultLayout seoData={seoData}>
      <ApplicationsPage />
    </DefaultLayout>
  );
}
