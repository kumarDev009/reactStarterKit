import countryCodeList from 'constants/countryCodeList';

export const phoneNumberValidation = (countryCode, phoneNumber) => {
  const [countryName] = countryCode?.split('+');
  const selectedCountry = countryCodeList?.find(country => country.short === countryName) || countryCodeList[0];
  const phoneNumberWithCountryCode = selectedCountry.phoneCode + phoneNumber;
  const isValidPhoneNumberWithCountry = selectedCountry?.regex?.test(phoneNumberWithCountryCode);
  const isValidPhoneNumber = selectedCountry?.regex?.test(phoneNumber);
  return {
    isValidPhoneNumberWithCountry,
    isValidPhoneNumber
  };
};
