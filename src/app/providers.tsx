'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';
import cn from 'classnames';
import { AppProgressBar } from 'next-nprogress-bar';
import { FC, PropsWithChildren, Suspense, useEffect } from 'react';

import GlobalModalsContainer from '@/components/modals/GlobalModalsContainer';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import { theme } from '@/config/theme';
import useInitApp from '@/hooks/useInitApp';
import { useAppSelector } from '@/store';
import StoreWatchers from '@/store/components/StoreWatchers';
import { selectUI } from '@/store/slices/ui';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { isPageScrollBlocked } = useAppSelector(selectUI);
  const { initApp } = useInitApp();

  useEffect(() => {
    initApp();
  }, []);

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <StoreWatchers />
      <AntdRegistry layer>
        <App className={cn(isPageScrollBlocked && 'fixed left-0 right-0 top-0')}>
          <>
            {children}
            <ScrollTopButton />
            <GlobalModalsContainer />
          </>
        </App>
      </AntdRegistry>
      <Suspense>
        <AppProgressBar color={theme.token.colorPrimary} height="5px" options={{ showSpinner: false }} shallowRouting />
      </Suspense>
    </ConfigProvider>
  );
};

export default Providers;
