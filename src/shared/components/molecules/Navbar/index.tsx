import { Button, IconButton, Link, Typography } from 'm3ntorship-ui';
import NextLink from 'next/link';
import Logo from 'public/images/navbar/logo.svg';
import Menu from 'public/images/navbar/menu.svg';
import X from 'public/images/navbar/x.svg';
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import style from './navbar.module.css';

import ModalOverlay from '@/shared/components/atoms/ModalOverlay';
import { SCREENS } from '@/shared/constants';
import useMedia from '@/shared/hooks/windowSize';
import { clsxm } from '@/shared/lib';

export default function Navbar(): ReactElement {
  const [showModal, setShowModal] = useState(false);
  const matchedLgScreen = useMedia(`(max-width: ${SCREENS.LG}px)`);

  return (
    <nav className={style.navWrapper}>
      <div className={style.navContent}>
        <div className={style.logoParentDiv}>
          <Logo className={style.logo} />
        </div>
        {matchedLgScreen && (
          <IconButton
            color='neutral'
            size='sm'
            type='button'
            variant='text'
            className='p-0'
            onClick={() => setShowModal(true)}
          >
            <Menu />
          </IconButton>
        )}

        {!matchedLgScreen && (
          <ul className={style.linksList}>
            <NavItem href='/' text='Story' />
            <NavItem href='/' text='Programs' />
            <NavItem href='/' text='Alumni' />
            <NavItem href='/' text='Mentors' />
            <NavItem href='/' text='Contact' />
            <div className='mx-med'>
              <NextLink href='/applications'>
                <Button variant='ghost'>Apply Now</Button>
              </NextLink>
            </div>
          </ul>
        )}

        {showModal && <NavbarMobile setShowModal={setShowModal} />}
      </div>
    </nav>
  );
}

type NavbarMobileProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

function NavbarMobile({ setShowModal }: NavbarMobileProps): ReactElement {
  const [mounted, setMounted] = useState(false);
  const navMobileClasses = clsxm(
    style.navMobile,
    !mounted && 'translate-x-64',
    mounted && 'translate-x-0'
  );

  useEffect(() => {
    const animateModal = setTimeout(() => setMounted(true), 100);

    return () => clearTimeout(animateModal);
  }, []);

  return (
    <ModalOverlay modalPosition='right' hideModal={() => setShowModal(false)}>
      <div className={navMobileClasses}>
        <ul className='flex flex-col gap-4'>
          <IconButton
            color='neutral'
            size='sm'
            type='button'
            variant='text'
            className='p-0'
            onClick={() => setShowModal(false)}
          >
            <X />
          </IconButton>

          <NavItem href='/' text='Story' />
          <NavItem href='/' text='Programs' />
          <NavItem href='/' text='Alumni' />
          <NavItem href='/' text='Mentors' />
          <NavItem href='/' text='Contact' />
        </ul>
        <NextLink href='/applications'>
          <Button className='w-full medium:w-auto' size='lg'>
            Enroll for free
          </Button>
        </NextLink>
      </div>
    </ModalOverlay>
  );
}

// create a nav item component with two props
interface NavProps {
  href: string;
  text: string;
}

function NavItem({ href, text }: NavProps): ReactElement {
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
}
