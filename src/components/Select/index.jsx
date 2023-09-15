import { Form, Select as AntdSelect } from 'antd';
import './index.scss';

const { Item: FormItem } = Form;
const { Option } = AntdSelect;

const Select = ({ name = '', showSearch = false, noStyle = false, onChange = () => {}, options = [], ...rest }) => {
  return (
    <FormItem name={name} noStyle={noStyle} {...rest}>
      <AntdSelect showSearch={showSearch} onChange={onChange} {...rest}>
        {options.map((option, index) => {
          const optionValue = `${option.short} +${option.phoneCode}`;
          const getLabelValue = () => {
            return (
              <>
                <span className="country-dropdown">{option.short}</span>
                {` ${option.label} +${option.phoneCode}`}
              </>
            );
          };
          return (
            <Option key={index} value={optionValue}>
              {getLabelValue()}
            </Option>
          );
        })}
      </AntdSelect>
    </FormItem>
  );
};

export default Select;
