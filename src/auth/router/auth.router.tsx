import { lazy } from 'react';
import { Navigate } from 'react-router';
const AuthLayout = lazy(() => import('@/auth/layouts/AuthLayout'));
import { LoginPage } from '@/auth/pages/login/LoginPage';
import { RegisterPage } from '@/auth/pages/register/RegisterPage';
import { NotAuthenticatedRoute } from '@/components/routes/ProtectedRoutes';

export const auntRouter = { 
    path: "/auth",
    element: <NotAuthenticatedRoute>
        <AuthLayout />
    </NotAuthenticatedRoute>,
    children: [
        {
            index: true,
            element: <Navigate to="/auth/login" replace={true} />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "register",
            element: <RegisterPage />,
        },
    ]
};