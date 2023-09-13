import { useState } from 'react';
import { Select } from 'antd';
import Input from 'components/Input';
import countryCodeList from 'constants/countryCodeList';

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
    const selectedCountry =
      countryCodeList.find(country => country?.phoneCode === parseInt(countryCode)) || countryCodeList[0];
    const phoneNumberWithCountryCode = selectedCountry?.phoneCode + phoneNumber;
    const isValidPhoneNumberWithCountry = selectedCountry?.regex?.test(phoneNumberWithCountryCode);
    const isValidPhoneNumber = selectedCountry?.regex?.test(phoneNumber);

    if (!isValidPhoneNumberWithCountry || !isValidPhoneNumber) {
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
    const [, code] = value.split('-');
    setCountryCode(code);
  };

  const handleKeyPress = e => {
    if (!/^[0-9]+$/.test(e.key)) {
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
    <Select //TODO: Need to create the CustomSelect component
      showSearch={true}
      onChange={handleCountryCode}
      defaultValue={inputStatus.countryCode}
      style={{ width: 130 }}
    >
      {countryCodeList?.map((val, i) => {
        return (
          <Option value={val.short + '-' + val?.phoneCode} key={i}>
            {val.short} + {val.phoneCode}
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
      onKeyPress={e => handleKeyPress(e)}
      rules={[{ required: true, message: 'Please enter your Phone Number!' }, { validator: validateInput }]}
      className={'mb-0'}
      {...rest}
    />
  );
};

export default PhoneInputField;
