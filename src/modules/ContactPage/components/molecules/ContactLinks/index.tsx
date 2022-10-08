import { IconButton, Link, Typography } from 'm3ntorship-ui';
import Facebook from 'public/images/contact-page/icons/facebook.svg';
import Github from 'public/images/contact-page/icons/github.svg';
import Instagram from 'public/images/contact-page/icons/instagram.svg';
import Linkedin from 'public/images/contact-page/icons/linkedin.svg';
import Twitter from 'public/images/contact-page/icons/twitter.svg';
import { ReactElement } from 'react';

import { SCREENS } from '@/shared/constants';
import useWindowSize from '@/shared/hooks/windowSize';

const contactLinks = [
  {
    id: '1',
    name: 'facebook',
    url: 'https://facebook.com/m3ntorship',
    comp: <Facebook />,
  },
  {
    id: '2',
    name: 'twitter',
    url: 'https://www.google.com',
    comp: <Twitter />,
  },
  {
    id: '3',
    name: 'linkedin',
    url: 'https://linkedin.com/company/m3ntorship/',
    comp: <Linkedin />,
  },
  {
    id: '4',
    name: 'instagram',
    url: 'https://www.google.com',
    comp: <Instagram />,
  },
  {
    id: '5',
    name: 'github',
    url: 'https://github.com/m3ntorship',
    comp: <Github />,
  },
];

export default function ContactLinks(): ReactElement {
  const isMDScreen = useWindowSize(`(min-width: ${SCREENS.MD}px)`);

  return (
    <div className='flex flex-col items-center justify-center gap-6.25 medium:flex-row large:flex-col'>
      <Typography
        variant={isMDScreen ? 'hero' : 'h2'}
        className='w-56 text-primary-contrast'
        align='center'
      >
        Get in touch
      </Typography>
      <ul className='flex flex-wrap gap-2.5 rounded-lrg bg-white p-6 shadow-shd-1'>
        {contactLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.url} target='_blank'>
              <IconButton size='sm' variant='filled' color='secondary'>
                {link.comp}
              </IconButton>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
