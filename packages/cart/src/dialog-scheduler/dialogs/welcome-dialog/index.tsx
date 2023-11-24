import { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';

import { DialogContext } from '../../index';

/**
 * 全局提示类 dialog
 */

const WelcomeDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { unmount } = useContext(DialogContext);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <Modal
      title="welcome Modal"
      open={isModalOpen}
      destroyOnClose={false}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={unmount}
    >
      <p>welcome...</p>
      <p>welcome...</p>
      <p>welcome...</p>
    </Modal>
  );
};

export default WelcomeDialog;
