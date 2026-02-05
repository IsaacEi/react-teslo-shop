import { baseURL } from '@/api/config';

export const buildProductImageUrl = ( image: string ): string => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${baseURL}/files/product/${image}`;
};

export const mapProductImages = ( images: string[] = [] ): string[] => {
  return images.map(image => buildProductImageUrl(image));
};