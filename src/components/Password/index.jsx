import { Popover } from 'antd';

import Input from 'components/Input';
import ProgressBar from 'components/ProgressBar';

import {
  PASSWORD_SUGGESTION_DESCRIPTION,
  lowerCaseRegex,
  upperCaseRegex,
  specialCharRegex,
  numberRegex
} from 'constants/signup';

import './index.scss';

const Password = ({ name = '', label = '', type = '', passwordStatus = {}, ...rest }) => {
  const { value, percent, color, progressType } = passwordStatus;
  const headerProgressBar = (
    <div className="des-content">
      <ProgressBar percent={percent} strokeColor={color} showInfo={false} />
      <div className="text-center">{!value ? 'Enter a password' : progressType}</div>
      <div>
        {PASSWORD_SUGGESTION_DESCRIPTION.map((description, index) => {
          const { label, key } = description;
          let isSatisfied = false;
          if (value && key === 0) {
            isSatisfied = value?.length >= 8;
          } else if (value && key === 1) {
            isSatisfied = upperCaseRegex.test(value);
          } else if (value && key === 2) {
            isSatisfied = lowerCaseRegex.test(value);
          } else if (value && key === 3) {
            isSatisfied = numberRegex.test(value);
          } else if (value && key === 4) {
            isSatisfied = specialCharRegex.test(value);
          }

          return (
            <ul key={index}>
              <li style={{ color: `${isSatisfied ? '#047a14' : '#de200b'}` }}>{label}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );

  return (
    <Popover placement="bottom" trigger="focus" content={() => headerProgressBar} className="password">
      <Input name={name} label={label} type={type} {...rest} />
    </Popover>
  );
};

export default Password;
