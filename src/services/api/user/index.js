import { get } from '..';

export const getUser = async () => {
  return await get('/user/getalluser');
};
