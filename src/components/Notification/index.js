import { notification } from 'antd';

const OpenNotification =
  type =>
  (message = '', description = '') => {
    notification[type]({ message, description });
  };

export default OpenNotification;
