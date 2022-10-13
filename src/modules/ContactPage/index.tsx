import type { ReactElement } from 'react';

import { ContactUsForm } from '@/modules/ContactPage/components/molecules';

export default function ContactPage(): ReactElement {
  return (
    <>
      <div className='h-14' />
      <ContactUsForm />
    </>
  );
}
