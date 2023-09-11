import { Switch as AntdSwitch, Form } from 'antd';

const { Item: FormItem } = Form;

const Switch = ({
  name = '',
  checkedChildren = null,
  unCheckedChildren = null,
  checked = false,
  onChange = () => {},
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <FormItem name={name} style={style} {...rest}>
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
