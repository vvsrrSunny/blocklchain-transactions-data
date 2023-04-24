import { Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";


const HeaderContent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (
        <Header style={{ padding: 0, background: colorBgContainer }} >
        <div className="flex h-full justify-center items-center">
            <Typography.Title style={{ margin: "0" }}>
                Blockchain Dashboard
            </Typography.Title>
        </div>
    </Header>
    );
};

export default HeaderContent;
