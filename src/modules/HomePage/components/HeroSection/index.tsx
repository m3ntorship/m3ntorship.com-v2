import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import Casual from './assets/casual.svg';
import { Navbar } from './Navbar';

export default function HeroSection(): ReactElement {
  return (
    <div className='hero bg-background'>
      <div className='container relative mx-auto w-container'>
        <span className='absolute z-0 h-full w-96 bg-white'></span>
        <span className='absolute right-0 z-0 h-full w-696 bg-white'></span>
        <Navbar />
        <div className='hero-section relative z-10 flex pt-6 pb-70'>
          <div className='info mr-104 ml-106 font-inter'>
            <Typography align='left' variant='hero'>
              Semper feugiat nibh sed pulvinar
            </Typography>
            <Typography variant='subtitle' className='mt-2'>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arc
            </Typography>
            <div className='button my-8'>
              <Button
                color='primary'
                onClick={() => {
                  alert('Hello');
                }}
                size='large'
                variant='filled'
              >
                Enroll for free
              </Button>
            </div>
          </div>
          <div className='image mr-72'>
            <Casual className='h-342 w-342' />
          </div>
        </div>
      </div>
    </div>
  );
}
