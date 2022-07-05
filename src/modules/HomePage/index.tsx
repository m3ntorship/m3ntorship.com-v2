import type { ReactElement } from 'react';

import HeroSection from '@/modules/HomePage/components/HeroSection';
import ValueSection from '@/modules/HomePage/components/ValueSection';

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ValueSection />
    </>
  );
}
