export type ConfirmationModalProps = {
  isModalVisible: boolean;
  handleOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
