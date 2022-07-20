import { Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';

import AvailableProgramCard from '@/modules/HomePage/components/organisms/AvailableProgramsSection/AvailableProgramCard';

export default function AvailableProgramsSection(): ReactElement {
  return (
    <section className='rounded-lrg bg-info-background small:p-xxl large:p-xxxl'>
      <div className='text-center'>
        <Typography
          variant='h1'
          component='h1'
          className='mb-xs font-inter small:hidden medium:block'
        >
          Available programs
        </Typography>
        <Typography
          variant='h3'
          component='h3'
          className='mb-xs font-inter small:block medium:hidden'
        >
          Available programs
        </Typography>
        <Typography
          variant='subtitle'
          component='p'
          className='mb-xs font-inter'
        >
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        </Typography>
      </div>
      <div className='mt-xxl grid gap-xl small:grid-cols-1 large:grid-cols-2'>
        <AvailableProgramCard
          title='Front-end'
          description='Curate your front end web development learning with this Track. Courses in HTML'
          buttonLabel='Enroll for free now'
        />
        <AvailableProgramCard
          title='Back-end'
          description='Master backend development like professionals working in Swiggy, Zerodha, and more'
          buttonLabel='Enroll for free now'
        />
      </div>
    </section>
  );
}
