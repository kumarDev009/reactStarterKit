import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneField = ({ onChange = () => {} }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <PhoneInput
        name="phone"
        country={'us'}
        onChange={onChange}
        containerStyle={{ marginBottom: '20px' }}
        inputStyle={{ width: '100%' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
};

export default CustomPhoneField;
