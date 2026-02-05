import { tesloApi } from '@/api/teslo.api';
import { useAuthStore } from '@/auth/stores/auth.store';
import type { AuthResponse } from '@/interfaces/auth.response';
export const checkAuthAction = async (): Promise<AuthResponse> => {
    const token = useAuthStore.getState().token;
    if (!token) throw new Error('No token found');
    try {
        const { data } = await tesloApi.get<AuthResponse>('/auth/check-status');
        return data; 
    } catch (error) {
        throw new Error('Token expired or not valid');
    }
}