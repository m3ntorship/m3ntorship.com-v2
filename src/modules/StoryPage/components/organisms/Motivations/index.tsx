import { Typography } from 'm3ntorship-ui';
import lightingBg from 'public/images/story-page/lighting.png';
import { ReactElement } from 'react';

import styles from './Motivation.module.css';

import { NextImage } from '@/shared/components/atoms';

export default function Motivation(): ReactElement {
  return (
    <section className={styles['motivation-wrapper']}>
      <div className={styles['image-wrapper']}>
        <NextImage
          alt='lighting bg'
          src={lightingBg}
          layout='fill'
          objectFit='cover'
        />
        <div className={styles['overlay']} />
        <Typography
          variant='hero'
          className={styles['hero-title']}
          align='center'
        >
          How it started
        </Typography>
      </div>

      <div className={styles['history-wrapper']}>
        <Typography variant='h6' className='text-primary-text'>
          Mentorship history
        </Typography>
        <Typography variant='body1' className='text-primary-text'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </Typography>
      </div>
    </section>
  );
}
