import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

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
    <div className='hero bg-background'>
      <div className='relative mx-4 medium:mx-6 medium:px-4 large:mx-8 large:px-0 xxlarge:mx-28'>
        <span className='absolute z-0 h-full w-1/3  rounded-br-lrg rounded-bl-lrg bg-white shadow-shd-1'></span>
        <span className='absolute right-0 z-0 h-full w-5/12 rounded-br-lrg rounded-bl-lrg bg-white shadow-shd-1'></span>
        <div>
          <Navbar />
        </div>
        <div className='hero-section relative z-10 flex pt-6 pb-17.5'>
          <div className='info mx-6 font-inter xlarge:mr-26 xlarge:ml-26.5'>
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
          <div className='image mr-18 hidden large:block'>
            <Casual className='h-85.5 w-85.5' />
          </div>
        </div>
      </div>
    </div>
  );
}
