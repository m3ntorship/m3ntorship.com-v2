import { Link, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Footer.module.css';

import { currentYear } from '@/shared/lib/';

import { links, socialMedias } from './linksData';

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

        <ul className='flex flex-wrap'>
          {links.conditions.map((link) => (
            <li key={link.id} className='px-med py-xxs'>
              <Link
                href={link.route}
                className='whitespace-nowrap text-secondary-text'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
