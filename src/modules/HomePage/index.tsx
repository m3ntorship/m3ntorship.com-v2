import type { ReactElement } from 'react';

import HeroSection from '@/modules/HomePage/components/HeroSection';
import { JoiningProcessFlow } from '@/modules/HomePage/components/organisms';
import ValueSection from '@/modules/HomePage/components/ValueSection';
import { Footer } from '@/shared/components/molecules';

export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <JoiningProcessFlow />
      <Footer />
    </>
  );
}
