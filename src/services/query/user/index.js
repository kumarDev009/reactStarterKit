import { useQuery } from 'react-query';

import { getUser } from 'services/api/user';

export const useGetAllUsers = () => {
  return useQuery('user', getUser, {
    staleTime: Infinity,
    retry: false //not retry even the API getting failed
  });
};
