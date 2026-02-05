import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/auth/stores/auth.store';

export const useCheckAuthStatus = () => {
    const { checkAuthStatus } = useAuthStore();
    return useQuery({
        queryKey: ['check-auth-status'],
        queryFn: checkAuthStatus,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5,
        refetchOnWindowFocus: true,
    });
}
