import { ReactElement } from 'react';

import ContactPage from '@/modules/ContactPage';
import { DefaultLayout } from '@/shared/hocs';

export default function Contact(): ReactElement {
  const seoData = {
    templateTitle: 'Contact',
    image: '/images/contact-page/contact.png',
  };

  return (
    <DefaultLayout seoData={seoData} withFooter withNavbar>
      <ContactPage />
    </DefaultLayout>
  );
}
