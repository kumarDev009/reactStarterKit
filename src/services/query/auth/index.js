import { useMutation } from 'react-query';
import { registerUser, generateOtp, newPasswordUpdate, verifyOtp } from 'services/api/auth';

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

export const useGenerateOtp = () => {
  return useMutation(generateOtp, {
    onError: error => {
      console.log('Error in generateOTP', error);
    },
    onSuccess: data => {
      if (data) {
        console.log('generate OTP Successfully', data);
      }
    }
  });
};

export const useVerifyOtp = () => {
  return useMutation(verifyOtp, {
    onError: error => {
      console.log('Error in otp verification', error);
    },
    onSuccess: data => {
      if (data) {
        console.log('OTP verification successfully', data);
      }
    }
  });
};

export const usePasswordUpdate = () => {
  return useMutation(newPasswordUpdate, {
    onError: error => {
      console.log('Error in new password update', error);
    },
    onSuccess: data => {
      if (data) {
        console.log('Successfully updated the new password', data);
      }
    }
  });
};
