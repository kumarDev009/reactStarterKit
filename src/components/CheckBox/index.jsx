import { Checkbox as AntdCheckBox, Form } from 'antd';

const { Item: FormItem } = Form;
const CheckBox = ({ name = '', onChange = () => {}, label = '', ...rest }) => {
  return (
    <FormItem name={name} {...rest}>
      <AntdCheckBox onChange={onChange} {...rest}>
        {label}
      </AntdCheckBox>
    </FormItem>
  );
};

export default CheckBox;
