import type { ReactElement } from 'react';

import {
  Alumni,
  AvailableProgramsSection,
  EnrollSection,
  HeroSection,
  JoiningProcessFlow,
  ValueSection,
} from '@/modules/HomePage/components/organisms';

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <JoiningProcessFlow />
      <AvailableProgramsSection />
      <Alumni />
      <EnrollSection />
    </>
  );
}
