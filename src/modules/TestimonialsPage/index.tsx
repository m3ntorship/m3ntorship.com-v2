import type { ReactElement } from 'react';

import {
  EnrollSection,
  TestimonialsHero,
} from '@/modules/TestimonialsPage/components/organisms';

export default function HomePage(): ReactElement {
  return (
    <>
      <div className='h-14' />
      <TestimonialsHero />
      <EnrollSection />
    </>
  );
}
