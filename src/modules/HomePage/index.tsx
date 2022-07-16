import type { ReactElement } from 'react';

import Alumni from '@/modules/HomePage/components/AlumniSection';
import HeroSection from '@/modules/HomePage/components/HeroSection';
import { JoiningProcessFlow } from '@/modules/HomePage/components/organisms';
import ValueSection from '@/modules/HomePage/components/ValueSection';

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <JoiningProcessFlow />
      <Alumni />
    </>
  );
}
