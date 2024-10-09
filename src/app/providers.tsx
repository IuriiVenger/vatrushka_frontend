'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';
import cn from 'classnames';
import { AppProgressBar } from 'next-nprogress-bar';
import { FC, PropsWithChildren, Suspense } from 'react';

import { theme } from '@/config/theme';
import { useAppSelector } from '@/store';
import { selectUI } from '@/store/selectors';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { isPageScrollBlocked } = useAppSelector(selectUI);

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <AntdRegistry layer>
        <App className={cn(isPageScrollBlocked && 'fixed left-0 right-0 top-0')}>{children}</App>
      </AntdRegistry>
      <Suspense>
        <AppProgressBar color={theme.token.colorPrimary} height="5px" options={{ showSpinner: false }} shallowRouting />
      </Suspense>
    </ConfigProvider>
  );
};

export default Providers;
