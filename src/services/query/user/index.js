import { useQuery } from 'react-query';

import { getUser } from 'services/api/user';

export const useGetAllUsers = () => {
  return useQuery('user', getUser, {
    staleTime: Infinity,
    retry: 3, //retry count
    retryDelay: 3000 //retry delay
  });
};
