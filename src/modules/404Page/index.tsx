import * as React from 'react';
import { ReactElement } from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { Seo } from '@/shared/components/molecules';

export default function NotFoundPage(): ReactElement {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='text-4xl md:text-6xl mt-8'>Page Not Found</h1>
          </div>
        </section>
      </main>
    </>
  );
}
