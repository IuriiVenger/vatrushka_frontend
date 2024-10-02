import { Suspense } from 'react';

import AccountPageContent from '@/components/pageContents/AccountPageContent';

const AccountPage = () => (
  <Suspense>
    <AccountPageContent />
  </Suspense>
);

export default AccountPage;
