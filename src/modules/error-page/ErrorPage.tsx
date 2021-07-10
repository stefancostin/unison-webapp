import { Result, Button } from 'antd';
import "antd/dist/antd.css";

const ErrorPage = (): JSX.Element => (
   <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default ErrorPage;