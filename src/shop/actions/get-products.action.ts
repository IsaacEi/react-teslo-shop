import { tesloApi } from "@/api/teslo.api";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number | string;
    maxPrice?: number | string;
    query?: string;
}

export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {
    try {
        const { limit, offset, sizes, gender, minPrice, maxPrice, query } = options;
        const params = { limit, offset, sizes, gender, minPrice, maxPrice, q: query };
        const { data } = await tesloApi.get<ProductsResponse>('/products', { params });
        const productsWithImagesUrls = data.products.map( product => ({
            ...product,
            images: product.images.map( image => 
                `${ import.meta.env.VITE_API_URL}/files/product/${ image }`,
            )
        }));
        
        return {
            ...data,
            products: productsWithImagesUrls
        };
    } catch (error) {
        return Promise.reject(error);
    }
}