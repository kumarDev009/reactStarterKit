import { Form } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputField = ({ name = '', label = '', layout = {}, defaultCountry = {}, ...rest }) => {
  const { Item: FormItem } = Form;
  return (
    <FormItem name={name} label={label} {...layout} {...rest}>
      <PhoneInput country={defaultCountry} inputStyle={{ width: '100%' }} {...rest} />
    </FormItem>
  );
};

export default PhoneInputField;
