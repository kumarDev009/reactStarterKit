import { useMemo } from 'react';

import Select from 'components/Select';
import Input from 'components/Input';
import countryCodeList from 'constants/countryCodeList';
import { phoneNumberValidation } from 'utils/phoneNumberValidation';

import './index.scss';

const PhoneInputField = ({ phoneName = '', countryName = '', label = '', optionLabelProp = 'value', ...rest }) => {
  const handleKeyPress = e => {
    if (e.target.id.endsWith(`_${phoneName}`) && !/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const countries = useMemo(() => {
    const updatedCountryList = countryCodeList.map(country => {
      const getShortName = () => {
        return (
          <>
            <span className="country-short-name">{country.short}</span>
            {` ${country.label} +${country.phoneCode}`}
          </>
        );
      };
      return {
        label: getShortName(),
        value: `${country.short} +${country.phoneCode}`
      };
    });
    return updatedCountryList;
  }, []);

  return (
    <Input
      name={phoneName}
      label={label}
      addonBefore={
        <Select
          name={countryName}
          showSearch
          options={countries}
          noStyle
          popupClassName="w-auto"
          optionLabelProp={optionLabelProp}
        />
      }
      onKeyPress={handleKeyPress}
      rules={[
        { required: true, message: 'Please enter your Phone Number!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            const countryCode = getFieldValue(countryName);
            const { isValidPhoneNumber, isValidPhoneNumberWithCountry } = phoneNumberValidation(countryCode, value);
            if (value?.length && (!isValidPhoneNumberWithCountry || !isValidPhoneNumber)) {
              return Promise.reject('Please check the phone number!');
            }
            return Promise.resolve();
          }
        })
      ]}
      {...rest}
    />
  );
};

export default PhoneInputField;
