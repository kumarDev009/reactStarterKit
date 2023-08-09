import { Typography } from 'antd';

const { Title, Text, Link } = Typography;

export const CustomTitle = ({
    text_level = "",
    title_text = "",
    ...rest
}) => {
    return (
        <div>
            <Title
                level={text_level}
                {...rest}
            >
                {title_text}
            </Title>
        </div>
    )
}
export const CustomFooterText = ({
    type = "",
    footerLabel = "",
    isLink = false,
    linkText = "",
    ...rest
}) => {
    return (
        <div>
            <Text
                type={type}
                {...rest}
            >
                {footerLabel}{isLink ? <Link>{linkText}</Link> : null}
            </Text>
        </div>
    )
}
