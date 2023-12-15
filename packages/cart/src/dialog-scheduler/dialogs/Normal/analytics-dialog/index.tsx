import { Modal } from 'antd';

import useNormalModal from '../../../src/userNormalModal';

const AnalyticsDialog = () => {
  const { visible, hide, unmount } = useNormalModal();

  const handleCancel = () => {
    hide();
  };

  const handleOk = () => {
    hide();
  };

  return (
    <Modal
      title="Analytics Dialog"
      open={visible}
      destroyOnClose={false}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={unmount}
    >
      <p>Analytics...</p>
      <p>Analytics...</p>
      <p>Analytics...</p>
    </Modal>
  );
};

export default AnalyticsDialog;
