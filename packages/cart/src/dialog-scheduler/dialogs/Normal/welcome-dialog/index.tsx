import { Button, Modal } from 'antd';

import useNormalModal from '../../../src/userNormalModal';
import AnalyticsDialog from '../analytics-dialog';

const WelcomeDialog = () => {
  const { visible, mount, hide, unmount } = useNormalModal();

  const handleCancel = () => {
    hide();
  };

  const handleOk = () => {
    hide();
  };

  const openClick = () => {
    hide().then(() => {
      mount(<AnalyticsDialog key="AnalyticsDialog" />, null);
    });
  };

  return (
    <Modal
      title="welcome Modal"
      open={visible}
      destroyOnClose={false}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={unmount}
    >
      <p>welcome...</p>
      <p>welcome...</p>
      <p>welcome...</p>

      <Button type="primary" onClick={openClick}>
        打开analytics
      </Button>
    </Modal>
  );
};

export default WelcomeDialog;
