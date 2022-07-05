import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';

import { Navbar } from './Navbar';

export default function HeroSection(): ReactElement {
  return (
    <div className='hero'>
      <Navbar />
      <Typography variant='h1'>
        Test All M3ntorship ui library components
      </Typography>
      <Button />
    </div>
  );
}
