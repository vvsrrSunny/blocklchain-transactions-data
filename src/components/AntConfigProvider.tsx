import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

const AntConfigProvider= (props: Props) => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#d6913c",
            },
        }}>
            {props.children}
        </ConfigProvider>
    );
};

export default AntConfigProvider;
