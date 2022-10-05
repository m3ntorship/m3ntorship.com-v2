import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import TestimonialsPage from '@/modules/TestimonialsPage';
import { getFeedbacks } from '@/modules/TestimonialsPage/api';
import { IFeedback } from '@/modules/TestimonialsPage/components/types/IFeedback';
import { DefaultLayout } from '@/shared/hocs';

type TestimonialsProps = {
  feedbacks: {
    data: IFeedback[];
    hasMore: boolean;
  };
};

export default function Testimonials(props: TestimonialsProps): ReactElement {
  const seoData = {
    templateTitle: 'Testimonials',
    image: '/images/testimonials-page/mentees.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <TestimonialsPage feedbacks={props.feedbacks} />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const feedbacks = await getFeedbacks(4, 0);

    return {
      props: { feedbacks },
    };
  } catch (err) {
    return { props: {} };
  }
};
