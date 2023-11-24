import { useContext, useEffect } from 'react';
import { Button } from 'antd';

import { DialogContext } from './dialog-scheduler';
import { SettingsDialog, WelcomeDialog } from './dialog-scheduler/internal/register';

const Page = () => {
  const { mount } = useContext(DialogContext);

  const openClick = () => {
    mount(<SettingsDialog key="settings" />);
  };

  useEffect(() => {
    mount(<WelcomeDialog key="welcome" />);
  }, []);

  return (
    <>
      <Button type="primary" onClick={openClick}>
        打开
      </Button>
    </>
  );
};

export default Page;
