import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './alumni.module.css';

import { AlumniCard } from '@/modules/HomePage/components/molecules';

import WindowMatchMedia from '../../../../../shared/hooks/windowSize/index';

// it's just a mockup data => so it will delete when we fetch the real data
const alumniData = [
  {
    name: 'Abood',
    link: '/',
    img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Abood 2',
    link: '/',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Monaliza',
    link: '/',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Obama',
    link: '/',
    img: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=426&q=80',
  },
  {
    name: 'El7ag',
    link: '/',
    img: 'https://images.unsplash.com/photo-1520853504280-249b72dc947c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Nancy',
    link: '/',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  },
];

const Alumni = (): ReactElement => {
  const isMobile = WindowMatchMedia('(max-width: 700px)');
  return (
    <div>
      <div className='container'>
        <div className={styles.alumniInfo}>
          <div>
            <Typography align='left' variant={isMobile ? 'h3' : 'h1'}>
              Meet our alumni
            </Typography>
            <Typography align='left' variant='subtitle' className='my-2'>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet
            </Typography>
          </div>
          {/* <div className={notMobile ? '' : 'hidden'}> */}
          <div className='hidden large:block'>
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
          {alumniData.map((alumni, index): ReactElement => {
            return (
              <AlumniCard
                key={index}
                name={alumni.name}
                link={alumni.link}
                img={alumni.img}
              />
            );
          })}
        </div>
        {/* <div className={notMobile ? 'hidden' : ' my-12'}> */}
        <div className='my-12 large:hidden'>
          <Button
            className='w-full medium:w-auto'
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
    </div>
  );
};

export default Alumni;
