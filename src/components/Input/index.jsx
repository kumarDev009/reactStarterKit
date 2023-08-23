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
  ...rest
}) => {
  const renderInputField = type => {
    switch (type) {
      case 'password':
        return <AntdInput.Password placeholder={placeholder} />;

      default:
        return (
          <AntdInput
            classNames={className}
            onChange={onChange}
            min={min}
            max={max}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
        );
    }
  };
  return (
    <div>
      {/* TODO: Handle this label within form item */}
      <div>{label}</div>
      <FormItem className="mt-2" name={name} {...rest}>
        {renderInputField(type)}
      </FormItem>
    </div>
  );
};

export default Input;
