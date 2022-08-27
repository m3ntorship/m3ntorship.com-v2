import { Button, Typography } from 'm3ntorship-ui';
import Image from 'next/image';
import NextLink from 'next/link';
import { ReactElement } from 'react';

import ProgramCard from '@/modules/HomePage/components/molecules/ProgramCard';

import img from './images/src.png';

interface AvailableProgramCardProps {
  title: string;
  description: string;
  buttonLabel: string;
}
export default function AvailableProgramCard(
  props: AvailableProgramCardProps
): ReactElement {
  return (
    <ProgramCard
      title={
        <Typography variant='h6' component='h6'>
          {props.title}
        </Typography>
      }
      description={
        <Typography
          variant='body2'
          component='p'
          className='text-secondary-text'
        >
          {props.description}
        </Typography>
      }
      button={
        <NextLink href='/applications'>
          <Button size='md'>{props.buttonLabel}</Button>
        </NextLink>
      }
      image={
        <div className='flex h-full w-full items-center justify-center bg-background small:py-med'>
          <Image src={img} alt='program-image' />
        </div>
      }
    />
  );
}
