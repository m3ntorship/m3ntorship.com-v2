import { Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';

import { DefaultLayout } from '@/shared/hocs';

export default function Programs(): ReactElement {
  const seoData = {
    templateTitle: 'Programs',
    image: '/images/home-page/casual.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <>
        <div className='h-14' />
        <Typography variant='h2' align='center'>
          Programs Page
        </Typography>
      </>
    </DefaultLayout>
  );
}
