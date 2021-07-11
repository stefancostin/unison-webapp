import './styles.scss';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  ApartmentOutlined,
  DesktopOutlined,
  EyeOutlined,
  NotificationOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Breadcrumb from 'components/breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

export const Dashboard = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={`logo ${collapsed ? 'collapsed' : 'extended'}`}>
          <span>{collapsed ? 'U' : 'Unison'}</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
          <Menu.Item key="1" icon={<ApartmentOutlined />}>
            Nodes
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Agents
          </Menu.Item>
          <Menu.Item key="3" icon={<SyncOutlined />}>
            Entities
          </Menu.Item>
          <Menu.Item key="4" icon={<EyeOutlined />}>
            Logs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb />
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer className="footer">
          <b>Unison</b>©2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
