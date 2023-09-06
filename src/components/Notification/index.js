import { notification } from 'antd';

const OpenNotification = ({ type = 'info', message = '', description = '', duration = 4 }) => {
  notification[type]({
    message: message,
    description: description,
    duration: duration
  });
};

export default OpenNotification;
