import { ReactElement } from 'react';

import ApplicationsPage from '@/modules/ApplicationsPage';
import { SCREENS } from '@/shared/constants';
import { DefaultLayout } from '@/shared/hocs';
import useMedia from '@/shared/hooks/windowSize';

export default function Applications(): ReactElement {
  const matched = useMedia(`(max-width: ${SCREENS.MD}px)`);

  const seoData = {
    templateTitle: 'Application',
    image: '/images/home-page/casual.png',
  };

  return (
    <DefaultLayout seoData={seoData} bgColor={matched ? 'white' : 'grey'}>
      <ApplicationsPage />
    </DefaultLayout>
  );
}
