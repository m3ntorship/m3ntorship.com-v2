import { Button, IconButton, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './card.module.css';

import AlmniIcon from './assets/alumniIcon.svg';
interface Card {
  name: string;
  link?: string;
  img: string;
}

const AlumniCard = ({ name, img }: Card): ReactElement => {
  return (
    <div className={`${styles.card} group`}>
      <div
        className={`${styles.cardImg} group-hover:h-3/5`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className={`${styles.cardOverlay} group-hover:hidden`}></div>
      <div className={styles.cardInfo}>
        <Typography variant='subtitle'>{name}</Typography>
        <IconButton
          className={`${styles.cardIconButton} group-hover:hidden`}
          size='md'
        >
          <AlmniIcon />
        </IconButton>
        <Button className={`${styles.cardButton} group-hover:block`}>
          View
        </Button>
        {/* <a href={link}> View Profile </a> */}
      </div>
    </div>
  );
};

export default AlumniCard;
