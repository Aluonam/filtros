import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const BotonDetalles = ({datosUsuarioActual}) => {

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
        Detalles
      </Button>
      <Modal title={`${datosUsuarioActual.name.first} ${datosUsuarioActual.name.last}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={datosUsuarioActual.picture.large}></img>
        <p>email: {datosUsuarioActual.email}</p>
        <p>username: {datosUsuarioActual.login.username}</p>
        <p>password: {datosUsuarioActual.login.password}</p>
      </Modal>
    </>
  );
};
export default BotonDetalles;