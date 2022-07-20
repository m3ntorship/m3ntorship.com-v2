import { Button, Typography } from 'm3ntorship-ui';
import githubBg from 'public/images/home-page/github-bg.png';
import type { ReactElement } from 'react';

import styles from './enrollSection.module.css';

import { NextImage } from '@/shared/components/atoms';

export default function EnrollSection(): ReactElement {
  return (
    <section className={styles['enroll-wrapper']}>
      <NextImage
        alt='github contribution bg'
        src={githubBg}
        width={1051}
        height={148}
        className={styles['github-bg']}
      />

      <Typography variant='h1' align='center' className={styles['enroll-text']}>
        Semper feugiat nibh sed pulvinar
      </Typography>
      <Button size='lg'>Enroll for free</Button>
    </section>
  );
}
