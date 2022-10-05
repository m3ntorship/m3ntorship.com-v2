import { Avatar, Badge, Link, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

type MenteeInfo = {
  src: string;
  name: string;
  track: string;
  cohort: number;
  linkedinUrl: string;
  githubUrl: string;
};

type TestimonialCardProps = {
  mentee: {
    menteeInfo: MenteeInfo;
    menteeFeedback: string;
  };
};

export default function TestimonialCard({
  mentee,
}: TestimonialCardProps): ReactElement {
  const { menteeInfo, menteeFeedback } = mentee;

  return (
    <li className='flex flex-col gap-6 rounded-lrg bg-white p-6 shadow-shd-1'>
      <div className='flex gap-4'>
        <Avatar src={menteeInfo.src} alt={menteeInfo.name} size='xlg' />

        <div className='flex flex-col'>
          <Typography variant='body1' className='mb-1 text-primary-text'>
            {menteeInfo.name}
          </Typography>
          <Typography variant='caption' className='mb-2 text-secondary-text'>
            {menteeInfo.track} Track
          </Typography>

          <div className='flex items-center'>
            <Badge
              text={`Cohort #${menteeInfo.cohort}`}
              color='secondary'
              className='mr-4'
            />
            <Link href={menteeInfo.linkedinUrl} target='_blank'>
              <ReactSVG
                src='/images/testimonials-page/icons/linkedin-square.svg'
                className='mr-2'
              />
            </Link>
            <Link href={menteeInfo.githubUrl} target='_blank'>
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
