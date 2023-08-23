import { Form } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneField = ({ name = '', label = '', layout = {}, defaultCountry = {} }) => {
  const { Item: FormItem } = Form;
  return (
    <FormItem name={name} label={label} {...layout}>
      <PhoneInput country={defaultCountry} inputStyle={{ width: '100%' }} />
    </FormItem>
  );
};

export default CustomPhoneField;
