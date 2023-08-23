import { Typography } from 'antd';

const { Text, Link } = Typography;

/* TODO: Need to overwrite this with AuthFooter component */
export const AuthFooter = ({ type = '', footerLabel = '', isLink = false, linkText = '', ...rest }) => {
  return (
    <Text type={type} {...rest}>
      {footerLabel}
      {isLink ? <Link>{linkText}</Link> : null}
    </Text>
  );
};

export default AuthFooter;
