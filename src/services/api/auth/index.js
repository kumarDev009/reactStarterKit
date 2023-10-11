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
