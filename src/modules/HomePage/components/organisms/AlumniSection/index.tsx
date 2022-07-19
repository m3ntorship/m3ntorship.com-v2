import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import { AlumniCard } from '@/modules/HomePage/components/molecules';

const Alumni = (): ReactElement => {
  return (
    <div className='alumni'>
      <div className='container'>
        <div className='info flex items-center justify-between'>
          <div>
            <Typography align='left' variant='h1'>
              Meet our alumni
            </Typography>
            <Typography align='left' variant='subtitle' className='my-2'>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet
            </Typography>
          </div>
          <div>
            <Button
              color='neutral'
              onClick={() => {
                window.alert('Work Well');
              }}
              size='md'
              variant='ghost'
            >
              View all alumni
            </Button>
          </div>
        </div>
        <div className='slide flex grid-flow-col overflow-x-scroll py-10 medium:flex-wrap medium:overflow-x-visible xLarge:flex-nowrap'>
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
          <AlumniCard
            name='Abood'
            link='www.google.com'
            img='https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc'
          />
        </div>
      </div>
    </div>
  );
};

export default Alumni;
