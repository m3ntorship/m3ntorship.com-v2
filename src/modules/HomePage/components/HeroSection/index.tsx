import type { ReactElement } from 'react';
import React from 'react';

import { Navbar } from './Navbar';

export default function HeroSection(): ReactElement {
  return (
    <div className='hero bg-default'>
      <div className='container relative mx-auto w-5/6'>
        <span className='absolute z-0 h-full w-96 bg-white'></span>
        <span className='absolute right-0 z-0 h-full w-696 bg-white'></span>
        <Navbar />
      </div>
    </div>
  );
}
