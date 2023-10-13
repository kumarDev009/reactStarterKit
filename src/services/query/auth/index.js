import { useMutation } from 'react-query';

import { loginUser, registerUser, verifyRegisteredUser } from 'services/api/auth';
import { handleToast } from 'utils';

export const useRegister = () => {
  return useMutation(registerUser, {
    onSuccess: response => {
      if (response) {
        handleToast('info', response);
      }
    }
  });
};

export const useVerifyUser = () => {
  return useMutation(verifyRegisteredUser, {
    onSuccess: response => {
      if (response?.message) {
        handleToast('success', response);
      }
    }
  });
};

export const useLoginUser = () => {
  return useMutation(loginUser, {
    onSuccess: response => {
      const token = response?.data?.token;
      if (token) {
        handleToast('success', response);
      } else {
        handleToast('info', response);
      }
    }
  });
};
