import { Checkbox, Form } from 'antd';

const { Item: FormItem } = Form;
export const CheckBoxField = ({ name = '', onChange = () => {}, label = '', checked = false, ...rest }) => {
  return (
    <FormItem name={name} valuePropName="checked" initialValue={false} {...rest}>
      <Checkbox onChange={onChange} checked={checked} {...rest}>
        {label}
      </Checkbox>
    </FormItem>
  );
};
