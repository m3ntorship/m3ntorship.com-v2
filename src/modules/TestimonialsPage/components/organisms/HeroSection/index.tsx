import { Typography } from 'm3ntorship-ui';
import menteesBg from 'public/images/testimonials-page/mentees.png';
import { ReactElement } from 'react';

import styles from './HeroSection.module.css';

import { NextImage } from '@/shared/components/atoms';
import { SCREENS } from '@/shared/constants';
import useMedia from '@/shared/hooks/windowSize';

export default function HeroSection(): ReactElement {
  const isMDScreen = useMedia(`(min-width: ${SCREENS.MD}px)`);

  return (
    <section className={styles['hero-wrapper']}>
      {isMDScreen && (
        <>
          <NextImage
            alt='mentees bg'
            src={menteesBg}
            width={1216}
            height={350}
            className='absolute hidden medium:block'
          />
          <div className={styles['overlay']} />
        </>
      )}

      <Typography
        variant='h1'
        align='center'
        className='z-10 text-black medium:text-white'
      >
        Meet our alumni
      </Typography>
      <Typography
        variant='subtitle'
        align='center'
        className='z-10 text-black medium:text-white'
      >
        consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
      </Typography>
    </section>
  );
}
