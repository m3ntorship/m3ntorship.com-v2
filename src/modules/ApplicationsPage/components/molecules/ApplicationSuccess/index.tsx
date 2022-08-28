import { Button, Typography } from 'm3ntorship-ui';
import NextLink from 'next/link';
import Home from 'public/images/applications-page/home.svg';
import successImg from 'public/images/applications-page/success.png';
import { ReactElement } from 'react';

import { NextImage } from '@/shared/components/atoms';

export default function ApplicationSuccess(): ReactElement {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <Typography variant='h4' align='center'>
        Application sent!
      </Typography>
      <NextImage
        alt='application sent successfully'
        src={successImg}
        width={200}
        height={200}
      />
      <Typography variant='body2' align='center'>
        Your application has been successfully received. Our team will review it
        and will get back to you within 10 working days
      </Typography>
      <NextLink href='/'>
        <Button type='button' className='flex items-center'>
          <Home className='mr-3' />
          Homepage
        </Button>
      </NextLink>
    </div>
  );
}
