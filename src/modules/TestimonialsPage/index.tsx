import type { ReactElement } from 'react';

import {
  EnrollSection,
  HeroSection,
} from '@/modules/TestimonialsPage/components/organisms';

export default function HomePage(): ReactElement {
  return (
    <>
      <div className='h-24' />
      <HeroSection />
      <EnrollSection />
    </>
  );
}
