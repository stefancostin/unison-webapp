import { Result, Button } from 'antd';
import { ErrorPageProps } from './types';

const DefaultStatus = '500';

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
  const { title, status } = props;

  return (
    <Result
      status={status || DefaultStatus}
      title={title || DefaultStatus}
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default ErrorPage;
