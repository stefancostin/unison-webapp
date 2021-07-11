import './styles.scss';
import AntBreadcrumb from 'antd/lib/breadcrumb';
import { useLocation } from 'react-router-dom';

const Breadcrumb = (): JSX.Element => {
  const location = useLocation();

  const routeMapping = location.pathname.split('/');

  return (
    <AntBreadcrumb className="breadcrumb-container">
      {routeMapping.map((route: string, index: number) => (
        <AntBreadcrumb.Item key={index} className="breadcrumb-item">
          {route}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
