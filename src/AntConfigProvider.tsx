import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const AntConfigProvider = (props: Props) => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#d97706",
            },
        }}>
            {props.children}
        </ConfigProvider>
    );
};

export default AntConfigProvider;
