import type { Size } from '@/interfaces/product.interface';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { type FC } from 'react'
import type { UseFormSetValue, UseFormGetValues, UseFormWatch } from 'react-hook-form';
import type { FormInputs } from './ProductForm';

interface Props {
    setValue: UseFormSetValue<FormInputs>;
    getValues: UseFormGetValues<FormInputs>;
    watch: UseFormWatch<FormInputs>
}

const availableSizes: Size[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

export const ProductSizes: FC<Props> = ({ setValue, getValues, watch }) => {
    const selelectedSizes = watch('sizes');
    const addSize = (size: Size) => {
        const currentSizes = new Set(getValues('sizes'))
        currentSizes.add(size);
        setValue('sizes', Array.from(currentSizes));
    };

    const removeSize = (size: Size) => {
        const currentSizes = new Set(getValues('sizes'))
        currentSizes.delete(size);
        setValue('sizes', Array.from(currentSizes));
    };
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Tallas disponibles
            </h2>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                        <span
                        key={size}
                        className={
                            cn( "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200",
                                {hidden: !selelectedSizes.includes(size)}
                            )
                        }
                        >
                        {size}
                        <button
                            type='button'
                            onClick={() => removeSize(size)}
                            className="cursor-pointer ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                            <X className="h-3 w-3" />
                        </button>
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                    <span className="text-sm text-slate-600 mr-2">
                        Añadir tallas:
                    </span>
                    {availableSizes.map((size) => (
                        <button
                        type='button'
                        key={size}
                        onClick={() => addSize(size)}
                        disabled={getValues('sizes').includes(size)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                            selelectedSizes.includes(size)
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer'
                        }`}
                        >
                        {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
