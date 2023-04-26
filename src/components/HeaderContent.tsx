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
                <Col span={22} md={{span: 8, offset:8}}>
                    <div className="flex justify-start md:justify-center">
                        <p className="text-2xl font-medium pl-4 md:pl-0 md:text-4xl md:font-bold" style={{ margin: "0" }}>
                            Digi's Dashboard
                        </p>
                    </div>
                </Col>
                <Col span={2} md={8}>
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
