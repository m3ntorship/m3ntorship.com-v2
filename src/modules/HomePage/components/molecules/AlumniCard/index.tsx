import { IconButton, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

import AlmniIcon from './assets/alumniIcon.svg';

interface Card {
  name: string;
  link?: string;
  img: string;
}

const AlumniCard = ({ name, img }: Card): ReactElement => {
  return (
    <div className='relative mx-4 flex h-72 w-44 items-end justify-center overflow-hidden rounded-lrg text-white'>
      <div
        className='absolute left-0 top-0 z-10 h-full w-full bg-cover'
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className='averlay absolute left-0 top-0 z-20 h-full w-full bg-black opacity-5'></div>
      <div className='info relative z-30 text-center'>
        <Typography variant='subtitle'>{name}</Typography>
        <IconButton className='my-3 mx-auto' size='md'>
          <AlmniIcon />
        </IconButton>
        {/* <a href={link}> View Profile </a> */}
      </div>
    </div>
  );
};

export default AlumniCard;
