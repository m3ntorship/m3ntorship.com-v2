import { Button, IconButton, Link, Typography } from 'm3ntorship-ui';
import NextLink from 'next/link';
import type { ReactElement } from 'react';
import React, { useState } from 'react';

import style from './hero.module.css';

import { clsxm } from '@/shared/lib';

import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';
import X from './assets/x.svg';

export const Navbar = (): ReactElement => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.navBar}>
      <div className={style.logoParentDiv}>
        <Logo className={style.logo} />
      </div>
      <span className={style.menuIcon}>
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
      <div className={clsxm(style.navLinks, { '-translate-y-full': !show })}>
        <ul className={style.linksList}>
          <span className={style.closeIcon}>
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
          <NavItem href='/' text='Story' />
          <NavItem href='/applications' text='Programs' />
          <NavItem href='/' text='Alumni' />
          <NavItem href='/' text='Mentors' />
          <NavItem href='/' text='Contacy' />
          <div className='mx-med'>
            <NextLink href='/applications'>
              <Button variant='ghost'>Apply Now</Button>
            </NextLink>
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
    <li className={style.linksListItem}>
      <NextLink href={href}>
        <Link>
          <Typography align='center' variant='body1'>
            {text}
          </Typography>
        </Link>
      </NextLink>
    </li>
  );
};
