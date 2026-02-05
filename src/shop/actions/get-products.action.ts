import { tesloApi } from "@/api/teslo.api";
import type { Filters } from "@/interfaces/filters";
import type { ProductsResponse } from "@/interfaces/products.response";
import { mapProductImages } from "@/lib/image-url";

export const getProductsAction = async (filters: Filters): Promise<ProductsResponse> => {
    try {
        const { limit, offset, sizes, gender, minPrice, maxPrice, query } = filters;
        const params = { limit, offset, sizes, gender, minPrice, maxPrice, q: query };
        const { data } = await tesloApi.get<ProductsResponse>('/products', { params });
        const productsWithImagesUrls = data.products.map( product => ({
            ...product,
            images: mapProductImages(product.images)
        }));
        
        return {
            ...data,
            products: productsWithImagesUrls
        };
    } catch (error) {
        return Promise.reject(error);
    }
}