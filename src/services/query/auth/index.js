import { useMutation } from 'react-query';

import { loginUser, registerUser, verifyRegisteredUser } from 'services/api/auth';
import { handleToast } from 'utils';

export const useRegister = onRegisterSuccess => {
  return useMutation(registerUser, {
    onError: err => {
      handleToast('error', err);
    },
    onSuccess: response => {
      if (response) {
        handleToast('info', response);
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
        handleToast('success', response);
        onLoginSuccess(token);
      } else {
        handleToast('info', response);
        onLoginSuccess();
      }
    },
    onError: err => {
      handleToast('error', err);
    }
  });
};
