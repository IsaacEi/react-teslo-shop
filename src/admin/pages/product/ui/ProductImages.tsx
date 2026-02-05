import { cn } from '@/lib/utils';
import { Upload, X } from 'lucide-react';
import { useState, type FC } from 'react'
import type { UseFormGetValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import type { FormInputs } from './ProductForm';
import type { Product } from '@/interfaces/product.interface';

interface Props {
    product: Product;
    setValue: UseFormSetValue<FormInputs>;
    getValues: UseFormGetValues<FormInputs>;
    watch: UseFormWatch<FormInputs>
}

export const ProductImages: FC<Props> = ({ product, setValue, getValues, watch }) => {
    const selelectedFiles = watch('files') || [];
    const [dragActive, setDragActive] = useState(false);
        
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true);
        } else if (e.type === 'dragleave') {
        setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = e.dataTransfer.files;
        if (!files) return;
            
        /* setFiles( prev => [...prev, ...Array.from(files)] ); */
        const currentFiles = getValues('files') || [];
        setValue('files', [...currentFiles, ...Array.from(files)]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
            
        /* setFiles( prev => [...prev, ...Array.from(files)] ); */
        const currentFiles = getValues('files') || [];
        setValue('files', [...currentFiles, ...Array.from(files)]);
    };
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Imágenes del producto
            </h2>

            {/* Drag & Drop Zone */}
            <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                dragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                type="file"
                multiple
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                />
                <div className="space-y-4">
                    <Upload className="mx-auto h-12 w-12 text-slate-400" />
                    <div>
                        <p className="text-lg font-medium text-slate-700">
                        Arrastra las imágenes aquí
                        </p>
                        <p className="text-sm text-slate-500">
                        o haz clic para buscar
                        </p>
                    </div>
                    <p className="text-xs text-slate-400">
                        PNG, JPG, WebP hasta 10MB cada una
                    </p>
                </div>
            </div>

            {/* Current Images */}
            <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-slate-700">
                Imágenes actuales
                </h3>
                <div className="grid grid-cols-2 gap-3">
                {product.images.map((image, index) => (
                    <div key={index} className="relative group">
                    <div className="aspect-square bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                        <img
                        src={image}
                        alt="Product"
                        className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <X className="h-3 w-3" />
                    </button>
                    <p className="mt-1 text-xs text-slate-600 truncate">
                        {image}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            {/* Images por cargar */}
            <div className={
                cn("mt-6 space-y-3", {hidden: selelectedFiles.length === 0})
            }>
                <h3 className="text-sm font-medium text-slate-700">
                Imágenes por cargar
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {selelectedFiles.map((image, index) => (
                        <div key={index} className="relative group">
                        <div className="aspect-square bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                            <img
                            src={URL.createObjectURL(image)}
                            alt="Product"
                            className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <X className="h-3 w-3" />
                        </button>
                        <p className="mt-1 text-xs text-slate-600 truncate">
                            {image.name}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
