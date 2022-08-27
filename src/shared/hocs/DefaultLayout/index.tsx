import type { ReactElement } from 'react';

import { Footer, Seo } from '@/shared/components/molecules';
import { ISeoProps } from '@/shared/components/molecules/Seo/ISeo';

interface IDefaultLayoutProps extends ISeoProps {
  children: ReactElement;
  withFooter?: boolean;
}

export default function DefaultLayout({
  children,
  seoData,
  withFooter,
}: IDefaultLayoutProps): ReactElement {
  return (
    <>
      <Seo seoData={seoData} />

      <div className='min-h-screen bg-background'>
        <div className='container space-y-20'>
          {children}
          {withFooter && <Footer />}
        </div>
      </div>
    </>
  );
}
