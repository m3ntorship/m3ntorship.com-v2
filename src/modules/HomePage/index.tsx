import type { ReactElement } from 'react';

import Alumni from '@/modules/HomePage/components/AlumniSection';
import {
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
      <Alumni />
      <Footer />
    </>
  );
}
