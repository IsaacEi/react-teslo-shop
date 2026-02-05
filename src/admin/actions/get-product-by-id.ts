import { tesloApi } from "@/api/teslo.api";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
    
    if (!id) return Promise.reject('Product ID is required');

    if (id === 'new') {

        const newProduct: Product = {
            id: 'new',
            title: '',
            description: '',
            images: [],
            stock: 0,
            price: 0,
            sizes: [],
            slug: '',
            tags: [],
            gender: 'unisex'
        } as unknown as Product;
            return Promise.resolve(newProduct);
        }

    try {
        const { data } = await tesloApi.get<Product>(`/products/${id}`);
        const images = data.images.map( image => {
            if (image.includes('http')) return image;
            return `${ import.meta.env.VITE_API_URL }/files/product/${ image }`;    
        });
        
        return {
            ...data,
            images
        };
    } catch (error) {
        return Promise.reject('Failed to fetch product data');
    }
};