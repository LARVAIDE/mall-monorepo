import { useState } from 'react';
import { Button, Modal } from 'antd';

const WelcomeDialog = () => {
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
        welcome
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>welcome...</p>
        <p>welcome...</p>
        <p>welcome...</p>
      </Modal>
    </>
  );
};

export default WelcomeDialog;
