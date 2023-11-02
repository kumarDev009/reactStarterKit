import { HOME_PATH } from 'constants/route';
import { AuthContext } from 'context/authContext';
import { ThemeContext } from 'context/themeContext';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { loginUser, registerUser, verifyRegisteredUser } from 'services/api/auth';
import { setStorage } from 'services/storage';

export const useRegister = () => {
  const { notification } = useContext(ThemeContext);

  return useMutation(registerUser, {
    onSuccess: response => {
      if (response) {
        notification.info(response.message);
      }
    },
    onError: error => {
      notification.error(`Registration Failed : ${error.message}`);
    }
  });
};

export const useVerifyUser = () => {
  const { notification } = useContext(ThemeContext);

  return useMutation(verifyRegisteredUser, {
    onSuccess: response => {
      if (response?.message) {
        notification.success(response.message);
      }
    },
    onError: error => {
      notification.error(`Registration Failed : ${error.message}`);
    }
  });
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setHasStorage } = useContext(AuthContext);
  const { notification } = useContext(ThemeContext);

  return useMutation(loginUser, {
    onSuccess: response => {
      const token = response?.data?.token;
      if (token) {
        setStorage('authToken', token);
        setHasStorage(token);
        navigate(HOME_PATH);
        notification.success(response?.message);
      } else {
        notification.info(response?.message);
      }
    },
    onError: error => {
      notification.error(`Login Failed : ${error.message}`);
    }
  });
};
