import type { ReactElement } from 'react';

import {
  EnrollSection,
  Envision,
  Motivation,
} from '@/modules/StoryPage/components/organisms';

export default function StoryPage(): ReactElement {
  return (
    <>
      <div className='h-14' />
      <Motivation />
      <Envision />
      <EnrollSection />
    </>
  );
}
