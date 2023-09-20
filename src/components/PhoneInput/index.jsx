import Select from 'components/Select';
import Input from 'components/Input';

import countryCodeList from 'constants/countryCodeList';

import { phoneNumberValidation } from 'utils/phoneNumberValidation';

import './index.scss';

const PhoneInputField = ({ name = '', label = '', ...rest }) => {
  const handleKeyPress = e => {
    if (e.target.id === 'signUp_form_phoneNumber' && !/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const filterSelectedCountry = () => {
    const updatedCountryList = countryCodeList.map(country => {
      const getShortName = () => {
        return (
          <>
            <span className="country-shortName">{country.short}</span>
            {` ${country.label} +${country.phoneCode}`}
          </>
        );
      };
      const optionValue = `${country.short} +${country.phoneCode}`;
      const optionLabel = getShortName();
      return {
        label: optionLabel,
        value: optionValue
      };
    });
    return updatedCountryList;
  };

  return (
    <Input
      name={'phoneNumber'}
      label={'Phone Number'}
      addonBefore={
        <Select
          name="country"
          showSearch
          options={filterSelectedCountry()}
          noStyle
          popupClassName="w-auto"
          optionLabelProp="value"
        />
      }
      onKeyPress={handleKeyPress}
      rules={[
        { required: true, message: 'Please enter your Phone Number!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            const countryCode = getFieldValue('country');
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
