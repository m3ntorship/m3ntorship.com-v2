import contactBg from 'public/images/contact-page/contact.png';
import { ReactElement } from 'react';

import { ContactLinks } from '@/modules/ContactPage/components/molecules';
import { NextImage } from '@/shared/components/atoms';

export default function ContactSection(): ReactElement {
  return (
    <section className='relative flex justify-center overflow-hidden rounded-lrg large:justify-start'>
      <NextImage
        alt='mentees bg'
        src={contactBg}
        layout='fill'
        objectFit='cover'
        className='absolute h-full w-full'
      />
      <div className='absolute h-full w-full bg-secondary/[0.72]' />

      <div className='z-10 px-1 py-16 medium:pt-16 medium:pb-38 large:px-16 large:pb-12'>
        <ContactLinks />
      </div>
    </section>
  );
}
