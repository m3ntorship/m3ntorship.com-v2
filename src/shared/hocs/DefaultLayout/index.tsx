import type { ReactElement } from 'react';

import { Footer, Seo } from '@/shared/components/molecules';
import { ISeoProps } from '@/shared/components/molecules/Seo/ISeo';

interface IDefaultLayoutProps extends ISeoProps {
  children: ReactElement;
}

export default function DefaultLayout({
  children,
  seoData,
}: IDefaultLayoutProps): ReactElement {
  return (
    <>
      <Seo seoData={seoData} />

      <div className='bg-background'>
        <div className='container space-y-20'>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
