import { Form, Input } from 'antd';

const { Item: FormItem } = Form;

export const InputField = ({
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
        return <Input.Password placeholder={placeholder} onChange={onChange} min={min} />;

      default:
        return (
          <Input
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
      <div>{label}</div>
      <FormItem className="mt-2" name={name} {...rest}>
        {renderInputField(type)}
      </FormItem>
    </div>
  );
};
