import { post } from '..';

export const registerUser = async userData => {
  return await post('/register', userData);
};
