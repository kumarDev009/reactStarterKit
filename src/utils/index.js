import { ToastMessage } from 'components/Toast';

export const handleToast = (type, data) => {
  if (data?.message) {
    ToastMessage({ type, content: data?.message });
  }
};
