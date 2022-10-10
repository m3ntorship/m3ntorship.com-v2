import { Avatar, Badge, Link, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

import { IFeedback } from '@/modules/TestimonialsPage/components/types/IFeedback';

type TestimonialCardProps = {
  mentee: IFeedback['mentee'];
};

export default function TestimonialCard({
  mentee,
}: TestimonialCardProps): ReactElement {
  const { menteeInfo, menteeFeedback } = mentee;
  const { src, name, track, cohort, linkedinUrl, githubUrl } = menteeInfo;

  return (
    <li
      className='flex flex-col gap-6 rounded-lrg bg-white p-6 shadow-shd-1'
      data-testid='testimonial-card'
    >
      <div className='flex gap-4'>
        <Avatar src={src} alt={name} size='xlg' />

        <div className='flex flex-col'>
          <Typography variant='body1' className='mb-1 text-primary-text'>
            {name}
          </Typography>
          <Typography variant='caption' className='mb-2 text-secondary-text'>
            {track} Track
          </Typography>

          <div className='flex items-center'>
            <Badge
              text={`Cohort #${cohort}`}
              color='secondary'
              className='mr-4'
            />
            <Link href={linkedinUrl} target='_blank'>
              <ReactSVG
                src='/images/testimonials-page/icons/linkedin-square.svg'
                className='mr-2'
              />
            </Link>
            <Link href={githubUrl} target='_blank'>
              <ReactSVG
                src='/images/testimonials-page/icons/github.svg'
                className='mr-2'
              />
            </Link>
          </div>
        </div>
      </div>

      <Typography variant='subtitle'>“{menteeFeedback}”</Typography>
    </li>
  );
}
