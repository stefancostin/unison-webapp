import { notification } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

const getIcon = (success: boolean): JSX.Element => {
  if (success) {
    return <SmileOutlined style={{ color: '#108ee9' }} />;
  }
  return <FrownOutlined style={{ color: '#ff0000' }} />;
};

const sendNotification = (message: string, description: string, success: boolean = true): void => {
  notification.open({
    message: message,
    description: description,
    icon: getIcon(success),
  });
};

export default sendNotification;
