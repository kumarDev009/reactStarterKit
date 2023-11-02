import { message } from 'antd';

const openToastMessage = type => content => {
  message[type]({ content });
};

const toastMessage = {
  info: openToastMessage('info'),
  error: openToastMessage('error'),
  success: openToastMessage('success'),
  warn: openToastMessage('warning')
};

export default toastMessage;
