import { FC, PropsWithChildren } from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col items-center justify-between">
    <Header />
    <main className="max-lg:pb-15 max-lg:pb-15 flex w-full flex-col gap-20 pb-20 pt-10 max-lg:gap-12 max-lg:pt-8 max-sm:gap-10 max-sm:pb-10 max-xs:gap-6 max-xs:pt-0">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
