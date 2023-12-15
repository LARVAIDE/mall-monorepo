import { Button, Input, Modal } from 'antd';

import useAliveModal from '../../../src/useAliveModal';
import useNormalModal from '../../../src/userNormalModal';
import WelcomeDialog from '../../Normal/welcome-dialog';

const SettingsDialog = () => {
  const { mount } = useNormalModal();
  const { visible, handlerClose } = useAliveModal('SettingDialog');

  const handleOk = () => {
    handlerClose();
  };

  const handleCancel = () => {
    handlerClose();
  };

  const openClick = () => {
    mount(<WelcomeDialog key="welcomeDialog" />, null);
  };

  return (
    <Modal title="settings Modal" open={visible} onOk={handleOk} onCancel={handleCancel}>
      <p>settings...</p>
      <p>settings...</p>
      <p>settings...</p>
      <Input placeholder="settings..." />

      <Button type="primary" onClick={openClick}>
        打开welcome
      </Button>
    </Modal>
  );
};

export default SettingsDialog;
