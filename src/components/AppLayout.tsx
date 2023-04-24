import React, { ReactNode } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import '../App.css';

const { Header, Content, Footer, Sider } = Layout;
interface Props {
    children?: ReactNode;
}
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Transactions', 'transactions', <UserOutlined />, [
        getItem('Shares', '1', <UserOutlined />),
    ]),
];

const AppLayout: React.FC = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo h-8" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['transactions']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copy Right ©2023 All rights reserved</Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
