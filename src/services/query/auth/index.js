import { useMutation } from 'react-query';

import { loginUser, registerUser, verifyRegisteredUser } from 'services/api/auth';
import { ToastMessage } from 'components/Toast';

export const useRegister = onRegisterSuccess => {
  return useMutation(registerUser, {
    onError: err => {
      ToastMessage({ type: 'error', content: `${err?.message}` });
    },
    onSuccess: response => {
      if (response) {
        ToastMessage({ type: 'info', content: `${response?.message}` });
        onRegisterSuccess();
      }
    }
  });
};

export const useVerifyUser = () => {
  return useMutation(verifyRegisteredUser);
};

export const useLoginUser = onLoginSuccess => {
  return useMutation(loginUser, {
    onSuccess: response => {
      const token = response?.data?.token;
      if (token) {
        ToastMessage({ type: 'success', content: `Login successful! ${response?.message}` });
        onLoginSuccess(token);
      } else {
        ToastMessage({ content: `${response?.message}` });
        onLoginSuccess();
      }
    },
    onError: err => {
      ToastMessage({ type: 'error', content: `Login failed! ${err.message}` });
    }
  });
};
