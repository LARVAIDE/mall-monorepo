import { Suspense } from 'react';
import { Skeleton } from 'antd';

import { WelcomeDialog } from './register';

const DialogScheduler = () => {
  const Loading = () => {
    return <Skeleton />;
  };

  return (
    <Suspense fallback={<Loading />}>
      <WelcomeDialog />
    </Suspense>
  );
};

export default DialogScheduler;
