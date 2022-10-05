import { ReactElement } from 'react';

import StoryPage from '@/modules/StoryPage';
import { DefaultLayout } from '@/shared/hocs';

export default function Story(): ReactElement {
  const seoData = {
    templateTitle: 'Story',
    image: '/images/story-page/lighting.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <StoryPage />
    </DefaultLayout>
  );
}
