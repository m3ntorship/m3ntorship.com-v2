import { Link, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Footer.module.css';

import { currentYear } from '@/lib/dates/dates';

const socialMedias = [
  {
    id: '1',
    src: '/images/social-icons/instagram.svg',
    url: 'https://www.google.com',
  },
  {
    id: '2',
    src: '/images/social-icons/twitter.svg',
    url: 'https://www.google.com',
  },
  {
    id: '3',
    src: '/images/social-icons/facebook.svg',
    url: 'https://facebook.com/m3ntorship',
  },
  {
    id: '4',
    src: '/images/social-icons/linkedin.svg',
    url: 'https://linkedin.com/company/m3ntorship/',
  },
];

const links = {
  about: [
    { id: '1', name: 'Story', route: '/' },
    { id: '2', name: 'Programs', route: '/' },
    { id: '3', name: 'Alumni', route: '/' },
    { id: '4', name: 'Mentors', route: '/' },
    { id: '5', name: 'Sponsors', route: '/' },
    { id: '6', name: 'Contact', route: '/' },
  ],
  conditions: [
    { id: '1', name: 'Terms of use', route: '/' },
    { id: '2', name: 'Privacy policy', route: '/' },
  ],
};

export default function Footer(): ReactElement {
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles['info-box']}>
        <Typography variant='h6' className='text-primary-text'>
          Mentorship
        </Typography>
        <Typography variant='body1' className={styles['info-text']}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </Typography>
        <Typography variant='caption' className='text-secondary-text'>
          © Mentorship {currentYear}
        </Typography>
      </div>

      <div className={styles['social-links-wrapper']}>
        <ul className={styles['social-links']}>
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.id}>
              <Link href={socialMedia.url} target='_blank'>
                <ReactSVG
                  src={socialMedia.src}
                  className={styles['social-icon']}
                />
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles['about-links-wrapper']}>
          {links.about.map((link) => (
            <li key={link.id} className={styles['about-links']}>
              <Link href={link.route} className='text-primary-text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='flex'>
          {links.conditions.map((link) => (
            <li key={link.id} className='px-med py-xxs'>
              <Link href={link.route} className='text-secondary-text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
