import React from "react";
import { DatabaseOutlined, StockOutlined} from '@ant-design/icons';
import { Layout, Menu, Image, Row, Col, Divider, MenuProps } from 'antd';
import logo from '../logo.svg';

const { Sider } = Layout;

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
    getItem('Transactions', 'transactions', <DatabaseOutlined />, [
        getItem('Shares', '1', <StockOutlined />),
    ]),
];
const SiderContent = () => {
    return (
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
            <Row justify="center" align="bottom">
                <Col>
                    <Image preview={false} height={59} src={logo} />
                </Col>
            </Row>
            <Divider className="border-orange-300 m-0 mb-2"></Divider>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['transactions']}
                items={items}
            />
        </Sider>
    );
};

export default SiderContent;
