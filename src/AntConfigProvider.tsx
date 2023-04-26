import { App, ConfigProvider } from "antd";
import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const AntConfigProvider = (props: Props) => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#f59e0b",
            },
        }}>
            <App>
                {props.children}
            </App>
        </ConfigProvider>
    );
};

export default AntConfigProvider;
