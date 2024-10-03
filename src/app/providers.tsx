'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';
import { AppProgressBar } from 'next-nprogress-bar';
import { FC, PropsWithChildren, Suspense } from 'react';

import { theme } from '@/config/theme';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={theme} locale={locale}>
    <AntdRegistry layer>{children}</AntdRegistry>
    <Suspense>
      <AppProgressBar color={theme.token.colorPrimary} height="5px" options={{ showSpinner: false }} shallowRouting />
    </Suspense>
  </ConfigProvider>
);

export default Providers;
