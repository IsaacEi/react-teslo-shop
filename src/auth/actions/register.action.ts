import { tesloApi } from "@/api/teslo.api"
import type { AuthData } from "@/interfaces/auth.data";
import type { AuthResponse } from "@/interfaces/auth.response"

export const registerAction = async (body: AuthData): Promise<AuthResponse> => {
    try {
        const { data} = await tesloApi.post<AuthResponse>("/auth/register", body);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}