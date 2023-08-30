import { useState } from 'react';
import { Select } from 'antd';
import Input from 'components/Input';
import countryList from 'constants/countryList';

const { Option } = Select;

const PhoneInputField = ({ name = '', label = '', layout = {}, defaultCountry = {}, rules = [], ...rest }) => {
  let countryDetails = {
    countryCode: 'IN-91',
    isValidPhoneNumber: false,
    type: '',
    phoneNumber: 0
  };

  const [countryCode, setCountryCode] = useState(0);
  const [inputStatus, setInputStatus] = useState(countryDetails);

  const handlePhoneInput = phoneNumber => {
    const selectedCountry = countryList.find(country => country?.phoneCode === parseInt(countryCode)) || countryList[0];
    const phoneNumberWithCountryCode = selectedCountry?.phoneCode + phoneNumber;
    if (!selectedCountry?.regex?.test(phoneNumberWithCountryCode)) {
      countryDetails = { ...countryDetails, type: 'error', phoneNumber };
    } else {
      countryDetails = {
        ...countryDetails,
        isValidPhoneNumber: !countryDetails.isValidPhoneNumber,
        type: 'success',
        phoneNumber
      };
    }
    setInputStatus(countryDetails);
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

  const validateInput = () => {
    if (inputStatus.phoneNumber.length && inputStatus.type === 'error') {
      return Promise.reject('Please check the phone number');
    }
    return Promise.resolve();
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
      isPhone
      onKeyPress={e => handleKeyPress(e)}
      rules={[{ required: true, message: 'Please enter your Phone Number!' }, { validator: validateInput }]}
      className={'mb-0'}
      {...rest}
    />
  );
};

export default PhoneInputField;
