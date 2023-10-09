const countryCodeList = [
  {
    phoneCode: 91,
    short: 'IN',
    label: 'India',
    regex: /^(\+?91|0)?[1-9]\d{9}$/
  },
  {
    phoneCode: 1,
    short: 'CA',
    label: 'Canada',
    regex: /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/
  },
  {
    phoneCode: 1,
    short: 'US',
    label: 'United States of Ameriaca',
    regex: /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/
  },
  {
    phoneCode: 1242,
    short: 'BS',
    label: 'Bahamas',
    regex: /^(\+?1[-\s]?|0)?(242)?[-\s]?\d{3}[-\s]?\d{4}$/
  },
  {
    phoneCode: 92,
    short: 'PK',
    label: 'Pakistan',
    regex: /^(?:(00|\+?92|0))?3[0-6]\d{8}$/
  },
  {
    phoneCode: 93,
    short: 'AF',
    label: 'Afghanistan',
    regex: /^(?:\+?93|0)?(7[0-9]{8}|20[1-7][0-9]{7}|[2-7][0-9]{7})$/
  },
  {
    phoneCode: 94,
    short: 'LK',
    label: 'Sri Lanka',
    regex: /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/
  },
  {
    phoneCode: 1264,
    short: 'AI',
    label: 'Anguilla',
    regex: /^(?:\+?1|0)?(264)?(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/
  },
  {
    phoneCode: 1268,
    short: 'AG',
    label: 'Antigua and Barbuda',
    regex: /^(?:\+1|1)?(268)?(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/
  }
];

export default countryCodeList;
