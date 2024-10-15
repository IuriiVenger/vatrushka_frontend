import { FC, PropsWithChildren } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen flex-col items-center">
    <Header />
    <main className="max-lg:pb-15 max-lg:pb-15 flex w-full grow flex-col items-center gap-20 pb-20 pt-10 max-lg:gap-12 max-lg:pt-8 max-sm:gap-10 max-sm:pb-10 max-xs:mx-0 max-xs:gap-6 max-xs:pt-6 [&>*:not(.disable-layout-max-w)]:max-w-300 [&>*:not(.disable-layout-px)]:max-xl:px-10 [&>*:not(.disable-layout-px)]:max-xs:px-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
