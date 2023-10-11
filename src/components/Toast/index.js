import { message } from 'antd';

export const ToastMessage = ({ type = 'info', content = '' }) =>
  message[type]({
    content: content
  });
