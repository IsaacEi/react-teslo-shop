import { /* createBrowserRouter, */ createHashRouter } from "react-router";
import { shopRouter } from "@/shop/router/shop.router";
import { auntRouter } from "@/auth/router/auth.router";
import { adminRouter } from "@/admin/router/admin.router";
import { Navigate } from "react-router";

/* export const appRouter = createBrowserRouter([ */
export const appRouter = createHashRouter([
   shopRouter,
   auntRouter,
   adminRouter,
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);