import { Modal } from 'antd';

import useAliveModal from '../../../src/useAliveModal';

const GlobalDialog = () => {
  const { visible, handlerClose } = useAliveModal('GlobalDialog');

  const handleOk = () => {
    handlerClose();
  };

  const handleCancel = () => {
    handlerClose();
  };

  return (
    <Modal title="global Modal" open={visible} onOk={handleOk} onCancel={handleCancel}>
      <p>global...</p>
      <p>global...</p>
      <p>global...</p>
    </Modal>
  );
};

export default GlobalDialog;
