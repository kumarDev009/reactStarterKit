import { useState } from 'react';
import { Select } from 'antd';
import Input from 'components/Input';
import countryList from 'constants/countryList';

const { Option } = Select;

const PhoneInputField = ({ name = '', label = '', layout = {}, defaultCountry = {}, rules = [], ...rest }) => {
  const [countryCode, setCountryCode] = useState(0);
  const [inputStatus, setInputStatus] = useState({ countryCode: 'IN-91', validPhoneNumber: false, type: '', help: '' });

  const handlePhoneInput = phoneNumber => {
    const selectedCountry = countryList.find(country => country?.phoneCode === parseInt(countryCode));
    const phoneNumberWithCountryCode = selectedCountry?.phoneCode + phoneNumber;
    if (!selectedCountry?.regex?.test(phoneNumberWithCountryCode)) {
      setInputStatus({ ...inputStatus, type: 'error', help: 'Please check the phone number' });
    } else {
      setInputStatus({ ...inputStatus, validPhoneNumber: !inputStatus.validPhoneNumber, type: 'success', help: '' });
    }
  };

  const handleCountryCode = value => {
    const countryValues = value.split('-');
    setCountryCode(countryValues[1]);
  };

  const handleKeyPress = e => {
    if (!/^[0-9]+$/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const countrySelector = (
    <Select
      showSearch={true}
      onChange={handleCountryCode}
      defaultValue={inputStatus.countryCode}
      style={{ width: 130 }}
    >
      {countryList?.map((val, i) => {
        return (
          <Option value={val.short + '-' + val?.phoneCode} key={i}>
            {val.emoji} {val.short} +{val.phoneCode}
          </Option>
        );
      })}
    </Select>
  );

  return (
    <Input
      name={name}
      label={label}
      addonBefore={countrySelector}
      onChange={e => handlePhoneInput(e.target.value)}
      status={inputStatus.type}
      // help={inputStatus.help && inputStatus.help} // need to pass the error message
      isPhone
      onKeyPress={e => handleKeyPress(e)}
      rules={[{ required: true, message: inputStatus.help ? inputStatus.help : 'Please enter your Phone Number!' }]}
      className={'mb-0'}
      {...rest}
    />
  );
};

export default PhoneInputField;
