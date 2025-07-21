import type { QueryClient } from '@tanstack/react-query';

import { USER_REGION_QUERY_KEY } from '@/constants';

// 서버 컴포넌트에서 사용할 수 있는 user 정보 관련된 prefetch 함수 모음

export async function prefetchUserRegion(queryClient: QueryClient) {
  const { getUserRegion } = await import('@/services/user/server');

  await queryClient.prefetchQuery({
    queryKey: USER_REGION_QUERY_KEY,
    queryFn: getUserRegion,
  });
}
