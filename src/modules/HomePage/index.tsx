import type { ReactElement } from 'react';

import HeroSection from '@/modules/HomePage/components/HeroSection';
import {
  JoiningProcessFlow,
  ValueSection,
} from '@/modules/HomePage/components/organisms';
import AvailableProgramsSection from '@/modules/HomePage/components/organisms/AvailableProgramsSection';
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
