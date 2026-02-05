

import type { Product } from '@/interfaces/product.interface';
import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ProductHeader } from './ProductHeader';
import { ProductTags } from './ProductTags';
import { ProductSizes } from './ProductSizes';
import { ProductImages } from './ProductImages';
import { ProductStatus } from './ProductStatus';
import { ProductBasicInfo } from './ProductBasicInfo';

interface Props {
    // Props
    title: string;
    subtitle: string;
    product: Product;
    isPending: boolean;
    // Methods
    onSubmit: ( productLike: Partial<Product> & { files?: File[] } ) => Promise<void>;
}

export interface FormInputs extends Product {
    files?: File[];
}

export const ProductForm:FC<Props> = ({ title, subtitle, product, isPending, onSubmit }) => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<FormInputs>({ defaultValues: product })
    

    useEffect(() => {
        setValue('files', []);
    }, [product]); 

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <ProductHeader title={title} subtitle={subtitle} isPending={isPending} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <ProductBasicInfo register={register} errors={errors} />

                        {/* Sizes */}
                        <ProductSizes setValue={setValue} getValues={getValues} watch={watch} />

                        {/* Tags */}
                        <ProductTags setValue={setValue} getValues={getValues} watch={watch} />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Product Images */}
                        <ProductImages 
                            product={product}
                            setValue={setValue}
                            getValues={getValues}
                            watch={watch}
                        />

                        {/* Product Status */}
                        <ProductStatus product={product} watch={watch} />
                    </div>
                </div>
            </div>
        </form>
    );
}
