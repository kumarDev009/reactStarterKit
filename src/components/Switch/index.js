import { Switch as AntdSwitch, Form } from 'antd';

const { Item: FormItem } = Form;

const Switch = ({
  name = '',
  checkedChildren = '',
  unCheckedChildren = '',
  checked = false,
  onChange = () => {},
  className = '',
  style = { marginBottom: 0 },
  ...rest
}) => {
  return (
    <FormItem name={name} style={style} valuePropName="checked" {...rest}>
      <AntdSwitch
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        checked={checked}
        onChange={onChange}
        className={className}
        {...rest}
      />
    </FormItem>
  );
};

export default Switch;
