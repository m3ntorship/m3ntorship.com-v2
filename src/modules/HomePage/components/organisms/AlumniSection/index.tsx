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
    img: 'https://p3.toutiaoimg.com/origin/pgc-image/35c1285e7f234266beb9102210385713?from=pc',
  },
  {
    name: 'Abood 2',
    link: '/',
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000',
  },
  {
    name: 'Monaliza',
    link: '/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/640px-Mona_Lisa-restored.jpg',
  },
  {
    name: 'Obama',
    link: '/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg/768px-Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    name: 'El7ag',
    link: '/',
    img: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    name: 'Nancy',
    link: '/',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dNQk_tdAmKOg3vO_1grdMG4agi7sezz9wQ&usqp=CAU',
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
