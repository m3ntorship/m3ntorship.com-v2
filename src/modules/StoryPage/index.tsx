import type { ReactElement } from 'react';

import {
  EnrollSection,
  Motivation,
} from '@/modules/StoryPage/components/organisms';

export default function StoryPage(): ReactElement {
  return (
    <>
      <div className='h-14' />
      <Motivation />
      <EnrollSection />
    </>
  );
}
