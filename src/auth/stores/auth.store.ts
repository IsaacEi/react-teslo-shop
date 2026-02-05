import { loginAction } from '@/auth/actions/login.action';
import type { User } from '@/interfaces/user.interface';
import { create, type StateCreator } from 'zustand'
import { persist } from "zustand/middleware";
import { checkAuthAction } from '@/auth/actions/check-auth.action';
import type { AuthData } from '@/interfaces/auth.data';
import { registerAction } from '@/auth//actions/register.action';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

type AuthState = {
  // Define your auth state properties and methods here
  user:  User | null;
  token: string | null;
  authStatus: AuthStatus;
  // Getters and setters for user authentication can be added as needed
  initialsName: () => string | null;
  isAdmin: () => boolean;
  // Methods for login, logout, and registration can also be included
  login: (email: string, password: string) => Promise<boolean>;
  register: (body: AuthData) => Promise<boolean>;
  checkAuthStatus: () => Promise<boolean>;
  logout: () => void;
}

const storeApi: StateCreator<AuthState> = (set, get) => ({
  // Initial state
  user:  null,
  token: null,
  authStatus: 'checking',
  initialsName: () => {
    const user = get().user;
    if (!user?.fullName) return null;

    const parts = user.fullName.trim().split(/\s+/);

    if (!parts.length) return null;

    if (parts.length === 1) {
      return parts[0][0]?.toUpperCase() ?? null;
    }

    return (
      (parts[0][0]?.toUpperCase() ?? "") +
      (parts[parts.length - 1][0]?.toUpperCase() ?? "")
    );
  },
  isAdmin: () => {
    const roles = get().user?.roles;
    return roles?.includes('admin') || false;
  },

  login: async (email: string, password: string) => {
    try {
      const { user, token } = await loginAction( email, password );
      set({ user, token, authStatus: 'authenticated' });
      return true; // Indicate successful login
    } catch (error) {
      set({ user: null, token: null, authStatus: 'not-authenticated' });
      return false; // Indicate failed login
    }
  },
  register: async (body: AuthData) => {
    try {
      const { user, token } = await registerAction( body );
      set({ user, token, authStatus: 'authenticated' });
      return true; // Indicate successful registration
    } catch (error) {
      set({ user: null, token: null,  authStatus: 'not-authenticated' });
      return false; // Indicate failed registration
    }
  },

  checkAuthStatus: async () => {
    try {
      const { user, token } = await checkAuthAction();
      set({ user, token, authStatus: 'authenticated',
      });
      return true;
    } catch (error) {
      set({
        user: undefined,
        token: undefined,
        authStatus: 'not-authenticated',
      });
      return false;
    }
  },
  
  logout: () => {
    set({ user: null, token: null, authStatus: 'not-authenticated' });
  },
  
});

export const useAuthStore = create<AuthState>()(
  persist(storeApi, { name: "auth-teslo-storage" })
);
 