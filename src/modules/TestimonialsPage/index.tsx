import type { ReactElement } from 'react';

import {
  EnrollSection,
  FeedbackSection,
  TestimonialsHero,
} from '@/modules/TestimonialsPage/components/organisms';
import { IFeedback } from '@/modules/TestimonialsPage/components/types/IFeedback';

type TestimonialsPageProps = {
  feedbacks: {
    data: IFeedback[];
    hasMore: boolean;
  };
};

export default function TestimonialsPage(
  props: TestimonialsPageProps
): ReactElement {
  return (
    <>
      <div className='h-14' />
      <TestimonialsHero />
      <FeedbackSection feedbacks={props.feedbacks} />
      <EnrollSection />
    </>
  );
}
