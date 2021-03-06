import { Button, IconButton, Link, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './card.module.css';

import { NextImage } from '@/shared/components/atoms';

import AlmniIcon from './assets/alumniIcon.svg';
interface Card {
  name: string;
  link: string;
  img: string;
}

const AlumniCard = ({ name, img, link }: Card): ReactElement => {
  return (
    <div className={styles.parentCard}>
      <div className={`${styles.card} group`}>
        {/* <div
          className={`${styles.cardImg} group-hover:h-3/5`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div> */}
        <NextImage
          imgClassName={styles.cardImg}
          alt='amuni'
          src={img}
          layout='fill'
        />
        <div className={`${styles.cardOverlay} group-hover:hidden`}></div>
        <div className={`${styles.cardInfo} group-hover:bg-white`}>
          <Typography variant='subtitle'>{name}</Typography>
          <IconButton
            className={`${styles.cardIconButton} group-hover:hidden`}
            size='md'
          >
            <AlmniIcon />
          </IconButton>
          <Button className={`${styles.cardButton} group-hover:block`}>
            <Link className='text-white' href={link}>
              View
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
