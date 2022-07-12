import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import style from './hero.module.css';

import Casual from './assets/casual.svg';
import { Navbar } from './Navbar';
import useWindowSize from './sizeHook';

// The Size Types
interface Size {
  width: number | undefined;
  height: number | undefined;
}

export default function HeroSection(): ReactElement {
  const size: Size = useWindowSize();
  return (
    <div className={style.mainHeroSection}>
      <div className={style.customContainer}>
        <span className={style.backgroundShapeOne}></span>
        <span className={style.backgroundShapeTwo}></span>
        <div>
          <Navbar />
        </div>
        <div className={style.heroSectionContent}>
          <div className={style.heroSectionContentInfo}>
            {size && (
              <Typography
                align='left'
                variant={
                  typeof size.width == 'number' && size.width <= 600
                    ? 'h2'
                    : 'hero'
                }
              >
                Semper feugiat nibh sed pulvinar
              </Typography>
            )}
            <Typography variant='subtitle' className='mt-2'>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arc
            </Typography>
            <div className='button my-8'>
              <Button
                color='primary'
                className='w-full medium:w-auto'
                onClick={() => {
                  alert('Hello');
                }}
                size='lg'
                variant='filled'
              >
                Enroll for free
              </Button>
            </div>
          </div>
          <div className={style.heroSectionImageParentContainer}>
            <Casual className={style.heroSectionImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
