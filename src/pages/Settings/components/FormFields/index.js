import { Col, Row } from 'antd';

import Button from 'components/Button';
import Input from 'components/Input';

const FormFields = ({ formItems, size = 24, gap = 0 }) => {
  return (
    <Row gutter={[16, gap]}>
      {formItems.map(item => (
        <Col span={size} key={item.label}>
          <Input label={item.label} name={item.name} placeholder={item.label} className="input-height" />
        </Col>
      ))}
      <Col className="d-flex align-items-center">
        <Button className="btn">Save Changes</Button>
        <Button type="default" className=" mx-3 input-height">
          Reset
        </Button>
      </Col>
    </Row>
  );
};

export default FormFields;
