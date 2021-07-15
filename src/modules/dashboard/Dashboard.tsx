import './styles.scss';
import { get } from 'lodash';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  ApartmentOutlined,
  DesktopOutlined,
  EyeOutlined,
  NotificationOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DashboardRoutes, GeneralRoutes } from 'router/routes';
import DashboardRouter from 'router/DashboardRouter';
import Breadcrumb from 'components/breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

export const Dashboard = (): JSX.Element => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  const handleRouteChange = (route: DashboardRoutes) => {
    history.push(`/${GeneralRoutes.Dashboard}/${route}`);
  };

  const getDefaultKey = (): string => {
    const routeSegments = history.location.pathname.split('/');
    const page = get(routeSegments, '2');

    switch (page) {
      case DashboardRoutes.Nodes:
        return String(1);
      case DashboardRoutes.Agents:
        return String(2);
      case DashboardRoutes.Entities:
        return String(3);
      case DashboardRoutes.Logs:
        return String(4);
      default:
        return String(1);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={`logo ${collapsed ? 'collapsed' : 'extended'}`}>
          <span>{collapsed ? 'U' : 'Unison'}</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[getDefaultKey()]} mode="inline">
          <Menu.Item key="1" icon={<ApartmentOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Nodes)}>
            Nodes
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Agents)}>
            Agents
          </Menu.Item>
          <Menu.Item key="3" icon={<SyncOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Entities)}>
            Entities
          </Menu.Item>
          <Menu.Item key="4" icon={<EyeOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Logs)}>
            Logs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb />
          <section className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <DashboardRouter />
          </section>
        </Content>
        <Footer className="footer">
          <b>Unison</b>©2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
