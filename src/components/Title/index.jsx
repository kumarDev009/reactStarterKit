import { Typography } from 'antd';

const { Title } = Typography;

const CustomTitle = ({ children, ...rest }) => {
  return (
    <div>
      <Title {...rest}>{children}</Title>
    </div>
  );
};

export default CustomTitle;
