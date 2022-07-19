import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './alumni.module.css';

import { AlumniCard } from '@/modules/HomePage/components/molecules';

const Alumni = (): ReactElement => {
  return (
    <div>
      <div className='container'>
        <div className={styles.alumniInfo}>
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
        <div className={styles.alumniSlide}>
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
