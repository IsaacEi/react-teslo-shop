import type { PropsWithChildren } from "react";
import { CustomFullScreenLoading } from '@/components/customs/CustomFullScreenLoading';
import { useCheckAuthStatus } from "@/auth/hooks/useCheckAuthStatus";

export const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  
  const { isLoading } = useCheckAuthStatus();

  if (isLoading) return <CustomFullScreenLoading />;

  return children;
};