import { lazy } from 'react';
const AdminLayout = lazy(() => import('@/admin/layouts/AdminLayout'));
import { DashboardPage } from '@/admin/pages/dashboard/DashboardPage';
import { ProductPage } from '@/admin/pages/product/ProductPage';
import { ProductsPage } from '@/admin/pages/products/ProductsPage';
import { NotFoundPage } from '@/shared/pages/NotFoundPage';
import { AdminRoute } from '@/components/routes/ProtectedRoutes';

export const adminRouter = { 
    path: "/admin",
    element: < AdminRoute>
        <AdminLayout />
    </AdminRoute>,
    children: [
        {
            index: true,
            element: <DashboardPage />,
        },
        {
            path: "products",
            element: <ProductsPage />,
        },
        {
            path: "product/:id",
            element: <ProductPage />,
        },
        {
            path: "*",
            element: <NotFoundPage />,
        }
    ]
};