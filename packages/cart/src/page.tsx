import { useEffect } from 'react';
import { Button } from 'antd';

import GlobalDialog from './dialog-scheduler/dialogs/Alive/global-dialog';
import SettingDialog from './dialog-scheduler/dialogs/Alive/setting-dialog';
import useAliveModal from './dialog-scheduler/src/useAliveModal';

const Page = () => {
  const { register, handlerOpen } = useAliveModal('SettingDialog');

  const handlerOpenSetting = () => {
    handlerOpen();
  };

  useEffect(() => {
    // TODO: 这部分可以自动化
    register(<GlobalDialog key="GlobalDialog" />);
    register(<SettingDialog key="SettingDialog" />);
  }, []);

  return (
    <>
      <Button type="primary" onClick={handlerOpenSetting}>
        打开setting
      </Button>
    </>
  );
};

export default Page;
