import classNames from 'classnames';
import { Button, Typography } from 'm3ntorship-ui';
import Link from 'next/link';
import type { ReactElement } from 'react';
import React, { useState } from 'react';

import Logo from './assets/logo.svg';

export const Navbar = (): ReactElement => {
  const [show, setShow] = useState(false);
  return (
    <div className='z-1 navbar relative flex flex-row justify-between bg-transparent py-xl'>
      <div className='logo flex items-center'>
        <Logo className='ml-6 h-lrg w-198' />
      </div>
      <span
        className='z-50 mr-4 large:hidden'
        onClick={() => {
          setShow(true);
        }}
      >
        show
      </span>
      <div
        className={classNames(
          'navbar mobile:absolute mobile:left-0 mobile:top-0 mobile:z-50 mobile:h-screen mobile:w-full mobile:bg-white mobile:transition-all',
          {
            'mobile:-translate-y-full mobile:transform': !show,
          }
        )}
      >
        <ul className='flex flex-col items-center large:flex-row'>
          <span
            className='z-50 mr-4 mt-8 w-full text-right large:hidden'
            onClick={() => {
              setShow(false);
            }}
          >
            hide
          </span>
          <NavItem href='/story' text='Story' />
          <NavItem href='/programs' text='Programs' />
          <NavItem href='/alumni' text='Alumni' />
          <NavItem href='/mentors' text='Mentors' />
          <NavItem href='/contacy' text='Contacy' />
          <div className='mx-med'>
            <Button variant='ghost'>Apply Now</Button>
          </div>
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
    <li className='mx-med cursor-pointer mobile:my-3'>
      <Link href={href}>
        <Typography align='center' variant='body1'>
          {text}
        </Typography>
      </Link>
    </li>
  );
};
