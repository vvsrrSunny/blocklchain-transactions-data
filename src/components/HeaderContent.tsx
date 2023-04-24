import { Col, Row, Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";


const HeaderContent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} >
            <Row justify="center" align="middle" className="h-full">
                <Col>
                    <Typography.Title style={{ margin: "0" }}>
                        Blockchain Dashboard
                    </Typography.Title>
                </Col>
            </Row>
        </Header>
    );
};

export default HeaderContent;
