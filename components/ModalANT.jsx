import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({element}) => {
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
        Show more
      </Button>
      <Modal title="More information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={element.picture.large}></img>
        <p>{element.email}</p>
      </Modal>
    </>
  );
};
export default ModalANT;