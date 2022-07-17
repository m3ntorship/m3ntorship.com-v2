import type { ReactElement } from 'react';

import HeroSection from '@/modules/HomePage/components/HeroSection';
import {
  AvailableProgramsSection,
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
      <Footer />
    </>
  );
}
