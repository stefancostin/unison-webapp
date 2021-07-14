import { Modal } from "antd";
import React from "react";
import { ConfirmationModalProps } from "./types";

export const ConfirmationModal = (props: ConfirmationModalProps): JSX.Element => {
  const {isModalVisible,handleOk,handleCancel } = props;

  return (
    <Modal title="Confirmation Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <h4>Are You Sure ?</h4>
  </Modal>
  );
};

export default ConfirmationModal;
