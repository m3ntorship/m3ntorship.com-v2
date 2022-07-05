import type { ReactElement } from 'react';
import React from 'react';

import { Navbar } from './Navbar';

export default function HeroSection(): ReactElement {
  return (
    <div className='hero bg-default'>
      <Navbar />
    </div>
  );
}
