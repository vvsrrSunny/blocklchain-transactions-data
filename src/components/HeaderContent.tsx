import { Badge, Col, Row, Typography, theme } from "antd";
import { BellFilled } from '@ant-design/icons';
import { Header } from "antd/es/layout/layout";

const HeaderContent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} >
            <Row align="middle" className="h-full">
                <Col span={8} offset={8}>
                    <div className="flex justify-center">
                        <Typography.Title style={{ margin: "0" }}>
                            Blockchain Dashboard
                        </Typography.Title>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="flex justify-end mr-6">
                        <Badge count={2} dot>
                            <BellFilled className="text-xl" />
                        </Badge>
                    </div>
                </Col>
            </Row>
        </Header>
    );
};

export default HeaderContent;
