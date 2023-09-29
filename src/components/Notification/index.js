import { notification } from 'antd';

const OpenNotification = ({ type = 'info', message = '', description = '' }) => {
  notification[type]({
    message: message,
    description: description
  });
};

export default OpenNotification;
