import { ShopLayaout } from '@/shop/layouts/ShopLayaout';
import { HomePage } from '@/shop/pages/home/HomePage';
import { ProductPage } from '@/shop/pages/product/ProductPage';
import { GenderPage } from '@/shop/pages/gender/GenderPage';

export const shopRouter = { 
    path: "/",
    element: <ShopLayaout />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: "products/:idSlug",
            element: <ProductPage />,
        },
        {
            path: "gender/:gender",
            element: <GenderPage />,
        },
    ]
};