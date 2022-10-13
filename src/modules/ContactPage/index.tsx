import type { ReactElement } from 'react';

import { ContactUsForm } from '@/modules/ContactPage/components/molecules';
import { ContactSection } from '@/modules/ContactPage/components/organisms';

export default function ContactPage(): ReactElement {
  return (
    <>
      <div className='h-14' />
      <div className='relative large:!mb-56'>
        <ContactSection />
        <article className='mt-6 w-full medium:relative medium:-top-18 medium:m-auto medium:w-10/12 large:absolute large:top-16 large:right-14 large:z-10 large:w-3/5 '>
          <ContactUsForm />
        </article>
      </div>
    </>
  );
}
