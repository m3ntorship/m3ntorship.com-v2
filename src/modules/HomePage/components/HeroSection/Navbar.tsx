import { Button } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import Logo from './assets/logo.svg';

export const Navbar = (): ReactElement => {
  return (
    <div className='navbar mx-auto w-5/6 bg-transparent py-xl'>
      <div className='logo'>
        <Logo className='h-lrg w-198' />
      </div>
      <div className='navigation'>
        <ul>
          <li>Home</li>
          <li>Pograms</li>
          <li>Alumni</li>
          <li>Mentors</li>
          <li>Contacy</li>
          <Button variant='ghost'>Apply Now</Button>
        </ul>
      </div>
    </div>
  );
};
