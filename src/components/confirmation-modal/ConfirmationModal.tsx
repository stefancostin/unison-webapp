import { Modal } from "antd";
import React from "react";
import { ConfirmationModalProps } from "./types";

export const ConfirmationModal = (props: ConfirmationModalProps): JSX.Element => {
  const {isModalVisible,handleOk,handleCancel } = props;

  return (
    <Modal title="Are You Sure ?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <h4>This action cannot be undone and the selected item will be permanently deleted.</h4>
  </Modal>
  );
};

export default ConfirmationModal;
