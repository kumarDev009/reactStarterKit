import { useRef } from 'react';
import Select from 'components/Select';
import Input from 'components/Input';
import { phoneNumberValidation } from 'utils/phoneNumberValidation';

const PhoneInputField = ({ name = '', label = '', layout = {}, defaultCountry = {}, rules = [], ...rest }) => {
  const countryCodeList = [
    {
      phoneCode: 91,
      short: 'IN',
      regex: /^(\+?91|0)?[1-9]\d{9}$/
    },
    {
      phoneCode: 1,
      short: 'CA',
      label: 'Canada',
      value: '1',
      regex: /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/
    },
    {
      phoneCode: 1,
      short: 'US',
      regex: /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/
    },
    {
      phoneCode: 1242,
      short: 'BS',
      regex: /^(\+?1[-\s]?|0)?(242)?[-\s]?\d{3}[-\s]?\d{4}$/
    },
    {
      phoneCode: 92,
      short: 'PK',
      regex: /^(?:(00|\+?92|0))?3[0-6]\d{8}$/
    },
    {
      phoneCode: 93,
      short: 'AF',
      regex: /^(?:\+?93|0)?(7[0-9]{8}|20[1-7][0-9]{7}|[2-7][0-9]{7})$/
    },
    {
      phoneCode: 94,
      short: 'LK',
      regex: /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/
    },
    {
      phoneCode: 1264,
      short: 'AI',
      regex: /^(?:\+?1|0)?(264)?(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/
    },
    {
      phoneCode: 1268,
      short: 'AG',
      regex: /^(?:\+1|1)?(268)?(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/
    }
  ];
  const inputRef = useRef();
  const handleKeyPress = e => {
    console.log('e.target.name', e.target.tagName);
    if (e.target === inputRef.current && !/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const countrySelector = (
    <Select name="country" showSearch options={countryCodeList} defaultValue="IN-91" noStyle style={{ width: 130 }} />
  );
  return (
    <Input
      name={'phoneNumber'}
      label={'phone Number'}
      addonBefore={countrySelector}
      onKeyPress={e => handleKeyPress(e)}
      ref={inputRef}
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
