import React, { ReactNode } from "react";
import { Layout, theme } from 'antd';
import '../App.css';
import SiderLayout from "./Sider";

const { Header, Content, Footer } = Layout;

interface Props {
    children?: ReactNode;
}

const AppLayout: React.FC = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderLayout />
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
