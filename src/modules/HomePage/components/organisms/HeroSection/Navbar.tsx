import { Button, IconButton, Link, Typography } from 'm3ntorship-ui';
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
    <li className={style.linksListItem}>
      <Link href={href}>
        <Typography align='center' variant='body1'>
          {text}
        </Typography>
      </Link>
    </li>
  );
};
