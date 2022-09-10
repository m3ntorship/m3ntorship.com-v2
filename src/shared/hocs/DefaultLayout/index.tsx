import type { ReactElement } from 'react';

import { Footer, Navbar, Seo } from '@/shared/components/molecules';
import { ISeoProps } from '@/shared/components/molecules/Seo/ISeo';
import { clsxm } from '@/shared/lib';

interface IDefaultLayoutProps extends ISeoProps {
  children: ReactElement;
  withFooter?: boolean;
  withNavbar?: boolean;
  bgColor?: 'white' | 'grey';
}

export default function DefaultLayout({
  children,
  seoData,
  withFooter,
  withNavbar,
  bgColor = 'grey',
}: IDefaultLayoutProps): ReactElement {
  const layoutClasses = clsxm(
    'min-h-screen',
    bgColor === 'white' && 'bg-white',
    bgColor === 'grey' && 'bg-background'
  );

  return (
    <>
      <Seo seoData={seoData} />

      {withNavbar && <Navbar />}
      <div className={layoutClasses}>
        <div className='container space-y-20'>
          {children}
          {withFooter && <Footer />}
        </div>
      </div>
    </>
  );
}
