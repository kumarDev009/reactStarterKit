import { Form, Select as AntdSelect } from 'antd';

const { Item: FormItem } = Form;

const Select = ({ name = '', showSearch = false, noStyle = false, onChange = () => {}, options = [], ...rest }) => {
  return (
    <FormItem name={name} noStyle={noStyle} {...rest}>
      <AntdSelect showSearch={showSearch} onChange={onChange} options={options} {...rest} />
    </FormItem>
  );
};

export default Select;
