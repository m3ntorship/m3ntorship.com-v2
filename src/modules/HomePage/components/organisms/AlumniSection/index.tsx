import { Button, Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';
import React from 'react';

const Alumni = (): ReactElement => {
  return (
    <div className='alumni'>
      <div className='container'>
        <div className='info flex items-center justify-between'>
          <div>
            <Typography align='left' variant='h1'>
              Meet our alumni
            </Typography>
            <Typography align='left' variant='subtitle'>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet
            </Typography>
          </div>
          <div>
            <Button
              color='neutral'
              onClick={() => {
                window.alert('Work Well');
              }}
              size='md'
              variant='ghost'
            >
              View all alumni
            </Button>
          </div>
        </div>
        <div className='slide py-10'>
          <div> Slide One Here </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
