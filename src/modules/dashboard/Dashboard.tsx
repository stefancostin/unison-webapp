import './styles.scss';
import accountService from 'services/account-service';
import SubMenu from 'antd/lib/menu/SubMenu';
import { get } from 'lodash';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  ApartmentOutlined,
  CloudOutlined,
  DesktopOutlined,
  DownOutlined,
  EyeOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { DashboardRoutes, GeneralRoutes } from 'router/routes';
import DashboardRouter from 'router/DashboardRouter';
import Breadcrumb from 'components/breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

export const Dashboard = (): JSX.Element => {
  const history = useHistory();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const account = accountService.getAccount();

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  const handleLogout = (): void => {
    accountService.logout();
    history.push(`/${GeneralRoutes.Login}`);
  };

  const handleRouteChange = (route: DashboardRoutes): void => {
    history.push(`/${GeneralRoutes.Dashboard}/${route}`);
  };

  const getDefaultKey = (): string => {
    const routeSegments = history.location.pathname.split('/');
    const page = get(routeSegments, '2');

    switch (page) {
      case DashboardRoutes.Connections:
        return String(1);
      case DashboardRoutes.Nodes:
        return String(2);
      case DashboardRoutes.Agents:
        return String(3);
      case DashboardRoutes.Entities:
        return String(4);
      case DashboardRoutes.Logs:
        return String(5);
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
          <Menu.Item key="1" icon={<CloudOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Connections)}>
            Connections
          </Menu.Item>
          <Menu.Item key="2" icon={<ApartmentOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Nodes)}>
            Nodes
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Agents)}>
            Agents
          </Menu.Item>
          <Menu.Item key="4" icon={<SyncOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Entities)}>
            Entities
          </Menu.Item>
          <Menu.Item key="5" icon={<EyeOutlined />} onClick={() => handleRouteChange(DashboardRoutes.Logs)}>
            Logs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background header" style={{ padding: 0 }}>
          <Menu onClick={handleLogout} mode="horizontal">
            <SubMenu key="AccountMenu" icon={<DownOutlined />} title={`${account.firstName} ${account.lastName}`}>
              <Menu.Item key="logout">Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
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
