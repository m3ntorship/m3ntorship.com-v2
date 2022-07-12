import classNames from 'classnames';
import { Button, IconButton, Typography } from 'm3ntorship-ui';
import Link from 'next/link';
import type { ReactElement } from 'react';
import React, { useState } from 'react';

import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';
import X from './assets/x.svg';

export const Navbar = (): ReactElement => {
  const [show, setShow] = useState(false);
  return (
    <div className='z-1 navbar relative flex flex-row justify-between bg-transparent py-xl'>
      <div className='logo flex items-center'>
        <Logo className='ml-4 h-lrg w-49.5 medium:ml-8 large:mx-6' />
      </div>
      <span className='z-50 mr-4 large:hidden'>
        <IconButton
          color='neutral'
          size='sm'
          type='button'
          variant='text'
          className='p-0'
          onClick={() => {
            setShow(true);
          }}
        >
          <Menu />
        </IconButton>{' '}
      </span>
      <div
        className={classNames(
          'navbar absolute left-0 top-0 z-50 h-screen w-full bg-white transition-all large:static large:z-0 large:h-auto large:w-auto large:bg-transparent',
          {
            '-translate-y-full transform  large:transform-none': !show,
          }
        )}
      >
        <ul className='flex flex-col items-center large:flex-row'>
          <span className='z-50 mr-4 flex w-full justify-end pt-8 large:hidden'>
            <IconButton
              onClick={() => {
                setShow(false);
              }}
              color='neutral'
              size='sm'
              type='button'
              variant='text'
              className='p-0'
            >
              <X />
            </IconButton>
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
    <li className='mx-med my-3 cursor-pointer large:my-auto'>
      <Link href={href}>
        <Typography align='center' variant='body1'>
          {text}
        </Typography>
      </Link>
    </li>
  );
};
