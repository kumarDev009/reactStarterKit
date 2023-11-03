import { Col, Row } from 'antd';

import Input from 'components/Input';

const FormFields = ({ formItems, size = 24 }) => {
  return (
    <Row gutter={[16, 10]}>
      {formItems.map(item => (
        <Col span={size} key={item.label}>
          <Input label={item.label} name={item.name} placeholder={item.label} className="input-height" />
        </Col>
      ))}
    </Row>
  );
};

export default FormFields;
