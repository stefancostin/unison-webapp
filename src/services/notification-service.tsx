import { notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const getIcon = (success: boolean): JSX.Element => {
  if (success) {
    return <CheckCircleOutlined style={{ color: '#108ee9' }} />;
  }
  return <CloseCircleOutlined style={{ color: '#ff0000' }} />;
};

const sendNotification = (message: string, description: string, success: boolean = true): void => {
  notification.open({
    message: message,
    description: description,
    icon: getIcon(success),
  });
};

export default sendNotification;
