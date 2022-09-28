import { ReactElement } from 'react';

import TestimonialsPage from '@/modules/TestimonialsPage';
import { DefaultLayout } from '@/shared/hocs';

export default function Testimonials(): ReactElement {
  const seoData = {
    templateTitle: 'Testimonials',
    image: '/images/testimonials-page/mentees.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <TestimonialsPage />
    </DefaultLayout>
  );
}
