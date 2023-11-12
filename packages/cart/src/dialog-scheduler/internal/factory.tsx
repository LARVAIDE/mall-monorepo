import { ReactNode, Suspense } from 'react';
import { Skeleton } from 'antd';

const DialogFactory = (Dialog: ReactNode) => {
  const Loading = () => {
    return <Skeleton.Button />;
  };

  return (
    <Suspense fallback={<Loading />}>
      <Dialog />
    </Suspense>
  );
};

export default DialogFactory;
