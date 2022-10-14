import { Button, Typography } from 'm3ntorship-ui';
import NextLink from 'next/link';
import Home from 'public/images/applications-page/home.svg';
import successImg from 'public/images/applications-page/success.png';
import { ReactElement } from 'react';

import { NextImage } from '@/shared/components/atoms';

type UniosSizes = 'sm' | 'md';
interface ISuccessProps {
  messageTitle: string;
  messageContent: string;
  showHomePageButton: boolean;
  messageIconSize: UniosSizes;
}
type TPossibleSizes = Record<UniosSizes, { width: string; height: string }>;

export default function ApplicationSuccess({
  messageTitle = '',
  messageContent = '',
  messageIconSize = 'sm',
  showHomePageButton = false,
}: ISuccessProps): ReactElement {
  const possibleSizes: TPossibleSizes = {
    sm: {
      width: '100',
      height: '100',
    },
    md: {
      width: '200',
      height: '200',
    },
  };
  const { width, height } = possibleSizes[messageIconSize];
  return (
    <div className='flex flex-col items-center space-y-10'>
      <Typography variant='h4' align='center'>
        {messageTitle}
      </Typography>
      <NextImage
        alt='application sent successfully'
        src={successImg}
        width={width}
        height={height}
      />
      <Typography variant='body2' align='center'>
        {messageContent}
      </Typography>
      {showHomePageButton ? (
        <NextLink href='/'>
          <Button type='button' className='flex items-center'>
            <Home className='mr-3' />
            Homepage
          </Button>
        </NextLink>
      ) : (
        ''
      )}
    </div>
  );
}
