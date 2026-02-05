import { tesloApi } from "@/api/teslo.api";
import type { FileUploadResponse } from "@/interfaces/file.response";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";
import { mapProductImages } from "@/lib/image-url";

export const createUpdateProductAction = async ( productLike: Partial<Product> & { files?: File[] } ) : Promise<Product> => {
    try {
        await sleep(1500);
        const { id, user, images = [], files = [], ...rest } = productLike;
        const isCreating = id === 'new';
        rest.stock = Number(rest.stock) || 0;
        rest.price = Number(rest.price) || 0;

        const imagesToSave  = await prepareImagesToSave(images, files);            

        const { data } = await tesloApi<Product>({
            url: isCreating ? '/products' : `/products/${ id }`,
            method: isCreating ? 'POST' : 'PATCH',
            data: { 
                ...rest, 
                images: imagesToSave
            }
        });
            
        return {
            ...data,
            images: mapProductImages(data.images)
        };
    } catch (error) {
        return Promise.reject('Failed to fetch product data');   
    }
}

export const uploadsProductImages = async ( files: File[] ): Promise<string[]> => {

    const uploadPromises = files.map( async file => {
        const fileName = await uploadProductImage(file);
        return fileName;
    });

    const uploadsImages = await Promise.all(uploadPromises);
    return uploadsImages;
}

export const uploadProductImage = async ( file: File ): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await tesloApi<FileUploadResponse>({
        url: '/files/product',
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.fileName;
}

const  prepareImagesToSave = async ( images: string[], files: File[] ): Promise<string[]> => {
    // Preparar las imagenes
    if (files.length > 0) {
        const uploadedFileNames = await uploadsProductImages(files);
        images.push(...uploadedFileNames);
    }

    const imagesToSave  = images.map( image => {
        if (image.includes('http')) return image.split('/').pop() || '';
        return image;
    });
    
    return imagesToSave;
}