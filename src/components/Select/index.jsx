import { Form, Select as AntdSelect } from 'antd';

const { Item: FormItem } = Form;
const { Option } = AntdSelect;

const Select = ({ name = '', showSearch = false, noStyle = false, onChange = () => {}, options = [], ...rest }) => {
  return (
    <FormItem name={name} noStyle={noStyle} {...rest}>
      <AntdSelect showSearch={showSearch} onChange={onChange} {...rest}>
        {options.map((option, index) => {
          return (
            <Option key={index} value={option?.short + '-' + option?.phoneCode}>
              {option.short} + {option.phoneCode}
            </Option>
          );
        })}
      </AntdSelect>
    </FormItem>
  );
};

export default Select;
