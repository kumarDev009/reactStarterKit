import countryCodeList from 'constants/countryCodeList';

export const phoneNumberValidation = (countryCode, phoneNumber) => {
  /* TODO: We need to cleanup this with Phone number validator package */
  const [countryName] = countryCode?.split('+');
  const selectedCountry = countryCodeList?.find(country => country.short === countryName.trim());
  const phoneNumberWithCountryCode = selectedCountry.phoneCode + phoneNumber;
  const isValidPhoneNumberWithCountry = selectedCountry?.regex?.test(phoneNumberWithCountryCode);
  const isValidPhoneNumber = selectedCountry?.regex?.test(phoneNumber);
  return {
    isValidPhoneNumberWithCountry,
    isValidPhoneNumber
  };
};
