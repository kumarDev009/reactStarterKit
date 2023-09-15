import Select from 'components/Select';
import Input from 'components/Input';
import countryCodeList from 'constants/countryCodeList';
import { phoneNumberValidation } from 'utils/phoneNumberValidation';

const PhoneInputField = ({ name = '', label = '', layout = {}, defaultCountry = {}, rules = [], ...rest }) => {
  const handleKeyPress = e => {
    if (e.target.id === 'signUp_form_phoneNumber' && !/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const countrySelector = (
    <Select
      name="country"
      showSearch
      options={countryCodeList}
      defaultValue="IN +91"
      noStyle
      popupClassName="w-auto"
      optionLabelProp="value"
    />
  );

  return (
    <Input
      name={'phoneNumber'}
      label={'Phone Number'}
      addonBefore={countrySelector}
      onKeyPress={handleKeyPress}
      rules={[
        { required: true, message: 'Please enter your Phone Number!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            const countryCode = getFieldValue('country') || '';
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
