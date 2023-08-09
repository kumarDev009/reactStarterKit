import { Spin } from 'antd';

export const CustomLoadingIcon = ({
    loading = false,
    size = "",
    className = "",
    message = "",
    children
}) => {
    return (
        <div className={className}>
         <Spin spinning={loading} size={size} tip={message}>{children}</Spin>
        </div>
    )
}