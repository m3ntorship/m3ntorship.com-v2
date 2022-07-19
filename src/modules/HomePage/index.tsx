import type { ReactElement } from 'react';

import {
  AvailableProgramsSection,
  EnrollSection,
  HeroSection,
  JoiningProcessFlow,
  ValueSection,
} from '@/modules/HomePage/components/organisms';
import { Footer } from '@/shared/components/molecules';

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <JoiningProcessFlow />
      <AvailableProgramsSection />
      <EnrollSection />
      <Footer />
    </>
  );
}
