import React, { ReactNode } from "react";
import { Layout, theme } from 'antd';
import '../App.css';
import SiderContent from "./SiderContent";
import HeaderContent from "./HeaderContent";

const { Content, Footer } = Layout;

interface Props {
    children?: ReactNode;
}

const AppLayout = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderContent />
            <Layout>
                <HeaderContent />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copy Right ©2023 All rights reserved</Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
