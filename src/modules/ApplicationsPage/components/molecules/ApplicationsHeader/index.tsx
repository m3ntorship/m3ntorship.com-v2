import { IconButton, Link } from 'm3ntorship-ui';
import NextLink from 'next/link';
import Arrow from 'public/images/applications-page/arrow.svg';
import Logo from 'public/images/applications-page/logo.svg';
import { ReactElement } from 'react';

const ApplicationsHeader = (): ReactElement => {
  return (
    <div className='mt-8 flex items-center justify-center '>
      <NextLink href='/'>
        <Link>
          <IconButton variant='text'>
            <Arrow />
          </IconButton>
        </Link>
      </NextLink>

      <Logo className='ml-7 h-lrg w-49.5' />
    </div>
  );
};

export default ApplicationsHeader;
