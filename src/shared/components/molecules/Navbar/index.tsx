import { Button, IconButton, Link } from 'm3ntorship-ui';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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

import { links } from './links';

export default function Navbar(): ReactElement {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useRouter();
  const matchedLgScreen = useMedia(`(max-width: ${SCREENS.LG}px)`);

  return (
    <nav className={style.navWrapper}>
      <div className={style.navContent}>
        <div className={style.logoParentDiv}>
          <NextLink href='/'>
            <Link>
              <Logo className={style.logo} />
            </Link>
          </NextLink>
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
            {links.map((link) => (
              <NavItem
                key={link.id}
                href={link.route}
                text={link.name}
                isActive={link.route === pathname}
              />
            ))}
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
  const { pathname } = useRouter();
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
        <ul className='flex flex-col items-center gap-4'>
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

          {links.map((link) => (
            <NavItem
              key={link.id}
              href={link.route}
              text={link.name}
              isActive={link.route === pathname}
            />
          ))}
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
  isActive: boolean;
}

function NavItem({ href, text, isActive }: NavProps): ReactElement {
  return (
    <li className={style.linksListItem}>
      <NextLink href={href}>
        <Link className={isActive ? 'font-semi-bold' : ''}>{text}</Link>
      </NextLink>
    </li>
  );
}
