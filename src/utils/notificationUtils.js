import { notification } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const createNotification = (
  message, description, placement = 'topRight',
) => {
  notification.info({
    message,
    description,
    placement,
  });
};
