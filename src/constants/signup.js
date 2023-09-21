const lowerCaseRegex = /[a-z]/;
const upperCaseRegex = /[A-Z]/;
const numberRegex = /\d/;
const specialCharRegex = /^(?=.*[!@#$%^&*]).*$/;

const PASSWORD_SUGGESTION_DESCRIPTION = [
  {
    label: 'Minimum 8 characters',
    key: 0
  },
  {
    label: 'Contain one or more uppercase characters',
    key: 1
  },
  {
    label: 'Contain one or more lowercase characters',
    key: 2
  },
  {
    label: 'Contain one or more numbers',
    key: 3
  },
  {
    label: 'Contain one or more of the following special characters (!@#$%^&*)',
    key: 4
  }
];

export { lowerCaseRegex, upperCaseRegex, numberRegex, specialCharRegex, PASSWORD_SUGGESTION_DESCRIPTION };
