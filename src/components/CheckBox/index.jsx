import { Checkbox as AntdCheckBox, Form } from 'antd';

const { Item: FormItem } = Form;
const CheckBox = ({ name = '', onChange = () => {}, label = '', ...rest }) => {
  console.log('che-rest', rest);
  return (
    <div>
      <FormItem name={name} {...rest}>
        <AntdCheckBox onChange={onChange} {...rest}>
          {label}
        </AntdCheckBox>
      </FormItem>
    </div>
  );
};

export default CheckBox;
