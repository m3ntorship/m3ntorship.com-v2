import { Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';

import { DefaultLayout } from '@/shared/hocs';

export default function Mentors(): ReactElement {
  const seoData = {
    templateTitle: 'Mentors',
    image: '/images/home-page/casual.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <>
        <div className='h-14' />
        <Typography variant='h2' align='center'>
          Mentors Page
        </Typography>
      </>
    </DefaultLayout>
  );
}
