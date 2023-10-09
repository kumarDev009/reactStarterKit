import { useMutation } from 'react-query';
import { registerUser } from 'services/api/auth';

export const useRegister = () => {
  return useMutation(registerUser, {
    onError: error => {
      console.error('Error during registration:', error);
    },
    onSuccess: data => {
      if (data) {
        console.log('Registration successful:', data);
      }
    }
  });
};
