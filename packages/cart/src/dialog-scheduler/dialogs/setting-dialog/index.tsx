import { useState } from 'react';
import { Button, Modal } from 'antd';

const SettingsDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        settings
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>settings...</p>
        <p>settings...</p>
        <p>settings...</p>
      </Modal>
    </>
  );
};

export default SettingsDialog;
