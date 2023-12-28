import { post } from '..';

export const registerUser = async userData => {
  return await post('/register', userData);
};

export const verifyRegisteredUser = async verificationData => {
  return await post('/verify_user', verificationData);
};

export const loginUser = async userData => {
  return await post('/login', userData);
};

export const generateOtp = async data => {
  return await post('/generate_otp', data);
};

export const verifyOtp = async data => {
  return await post('/verify_otp', data);
};

export const newPasswordUpdate = async data => {
  return await post('/password_update', data);
};
