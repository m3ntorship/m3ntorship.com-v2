import { Button } from 'm3ntorship-ui';
import { ReactElement, useState } from 'react';

import { getFeedbacks } from '@/modules/TestimonialsPage/api';
import { TestimonialCard } from '@/modules/TestimonialsPage/components/organisms';
import { IFeedback } from '@/modules/TestimonialsPage/components/types/IFeedback';

type FeedbackSectionProps = {
  feedbacks: {
    data: IFeedback[];
    hasMore: boolean;
  };
};

export default function FeedbackSection(
  props: FeedbackSectionProps
): ReactElement {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>(props.feedbacks.data);
  const [offset, setOffset] = useState(props.feedbacks.data.length);
  const [hasMore, setHasMore] = useState(props.feedbacks.hasMore);
  const [loading, setLoading] = useState(false);

  const getMoreFeedbacks = async () => {
    setLoading(true);
    try {
      const moreFeedbacks = await getFeedbacks(4, offset);

      setTimeout(() => {
        setFeedbacks([...feedbacks, ...moreFeedbacks.data]);
        setOffset(feedbacks.length + moreFeedbacks.data.length);
        setHasMore(moreFeedbacks.hasMore);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <section className='flex flex-col items-center'>
      <ul className='grid grid-cols-1 gap-8 large:grid-cols-2'>
        <div className='flex flex-col gap-5'>
          {feedbacks.map(
            (feedback, index) =>
              index % 2 === 0 && (
                <TestimonialCard
                  key={feedback.mentee.id}
                  mentee={feedback.mentee}
                />
              )
          )}
        </div>
        <div className='flex flex-col gap-5'>
          {feedbacks.map(
            (feedback, index) =>
              index % 2 !== 0 && (
                <TestimonialCard
                  key={feedback.mentee.id}
                  mentee={feedback.mentee}
                />
              )
          )}
        </div>
      </ul>

      {hasMore && (
        <Button
          variant='ghost'
          color='neutral'
          size='lg'
          className='mt-9'
          onClick={getMoreFeedbacks}
          loading={loading}
        >
          Load more
        </Button>
      )}
    </section>
  );
}
