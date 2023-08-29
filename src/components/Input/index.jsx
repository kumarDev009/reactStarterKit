import { Form, Input as AntdInput } from 'antd';

const { Item: FormItem } = Form;

const Input = ({
  name = '',
  onChange = () => {},
  placeholder = '',
  label = '',
  max = 0,
  min = 0,
  type = '',
  className = '',
  rules = [],
  isPhone = false,
  addonBefore = [],
  ...rest
}) => {
  const renderInputField = type => {
    switch (type) {
      case 'password':
        return <AntdInput.Password placeholder={placeholder} onChange={onChange} {...rest} />;

      default:
        return (
          <AntdInput
            classNames={className}
            onChange={onChange}
            min={min}
            max={max}
            type={type}
            addonBefore={isPhone && addonBefore}
            placeholder={placeholder}
            {...rest}
          />
        );
    }
  };
  return (
    <div>
      {/* TODO: Handle this label within form item */}
      <div className="ant-form-item-required pb-2">{label}</div>
      <FormItem name={name} rules={rules} {...rest}>
        {renderInputField(type)}
      </FormItem>
    </div>
  );
};

export default Input;
