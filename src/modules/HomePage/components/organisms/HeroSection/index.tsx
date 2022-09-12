import { Button, Typography } from 'm3ntorship-ui';
import NextLink from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import style from './hero.module.css';

import WindowMatchMedia from '@/shared/hooks/windowSize';

import Casual from './assets/casual.svg';

export default function HeroSection(): ReactElement {
  const mobile: boolean = WindowMatchMedia('(max-width: 600px)');
  return (
    <section className={style.customContainer}>
      <span className={style.backgroundShapeOne}></span>
      <span className={style.backgroundShapeTwo}></span>
      <div className={style.heroSectionContent}>
        <div className={style.heroSectionContentInfo}>
          <Typography align='left' variant={mobile ? 'h2' : 'hero'}>
            Semper feugiat nibh sed pulvinar
          </Typography>
          <Typography variant='subtitle' className='mt-2'>
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo nulla facilisi nullam vehicula ipsum a arc
          </Typography>
          <div className='button my-8'>
            <NextLink href='/applications'>
              <Button className='w-full medium:w-auto' size='lg'>
                Enroll for free
              </Button>
            </NextLink>
          </div>
        </div>
        <div className={style.heroSectionImageParentContainer}>
          <Casual className={style.heroSectionImage} />
        </div>
      </div>
    </section>
  );
}
