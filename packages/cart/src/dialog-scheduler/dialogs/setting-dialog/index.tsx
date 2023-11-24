import { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

import { DialogContext } from '../../src/provider';
import WelcomeDialog from '../welcome-dialog';

const SettingsDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mount, unmount } = useContext(DialogContext);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openWelcome = () => {
    mount(<WelcomeDialog />);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <Modal title="settings Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} afterClose={unmount}>
      <p>settings...</p>
      <p>settings...</p>
      <p>settings...</p>
      <Button type="primary" onClick={openWelcome}>
        open welcome
      </Button>
    </Modal>
  );
};

export default SettingsDialog;
