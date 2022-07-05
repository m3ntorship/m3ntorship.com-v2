import { Button, Typography } from 'm3ntorship-ui';
import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import Logo from './assets/logo.svg';

export const Navbar = (): ReactElement => {
  return (
    <div className='z-1 navbar relative mr-6 flex justify-between bg-transparent py-xl'>
      <div className='logo flex items-center'>
        <Logo className='ml-6 h-lrg w-198' />
      </div>
      <div className='navigation'>
        <ul className='flex items-center'>
          <NavItem href='/story' text='Story' />
          <NavItem href='/programs' text='Programs' />
          <NavItem href='/alumni' text='Alumni' />
          <NavItem href='/mentors' text='Mentors' />
          <NavItem href='/contacy' text='Contacy' />
          <Button className='mx-med' variant='ghost'>
            Apply Now
          </Button>
        </ul>
      </div>
    </div>
  );
};

// create a nav item component with two props
interface NavProps {
  href: string;
  text: string;
}
const NavItem = ({ href, text }: NavProps): ReactElement => {
  return (
    <li className='mx-med cursor-pointer'>
      <Link href={href}>
        <Typography align='center' variant='body1'>
          {text}
        </Typography>
      </Link>
    </li>
  );
};
