
import { type FC } from 'react'
import { cn } from '@/lib/utils';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormInputs } from './ProductForm';

interface Props {
    register: UseFormRegister<FormInputs>;
    errors: FieldErrors<FormInputs>;
}

export const ProductBasicInfo: FC<Props> = ({ register, errors }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Información del producto
            </h2>

            <div className="space-y-6">
                <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Título del producto
                </label>
                <input
                    type="text"
                    {...register('title', { required: true })}
                    className={
                        cn(
                            "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                            errors.title ? 'border-red-500' : 'border-slate-300'
                        )
                    }
                    placeholder="Título del producto"
                />
                {errors.title && <span className="text-red-500 text-sm">Este campo es obligatorio</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Precio ($)
                    </label>
                    <input
                    type="number"
                        {...register('price', {
                            required: true,
                            min: 1
                        })}
                        className={
                        cn(
                            "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                            errors.price ? 'border-red-500' : 'border-slate-300'
                        )
                    }
                        placeholder="Precio del producto"
                        />
                        {errors.price && <span className="text-red-500 text-sm">El precio debe ser mayor a 0</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Stock del producto
                    </label>
                    <input
                    type="number"
                        {...register('stock', {
                            required: true,
                            min: 0
                        })}
                    className={
                        cn(
                            "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                            errors.stock ? 'border-red-500' : 'border-slate-300'
                        )
                    }
                    placeholder="Stock del producto"
                    />
                    {errors.stock && <span className="text-red-500 text-sm">El stock no puede ser negativo</span>}
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Slug del producto
                </label>
                <input
                    type="text"
                    {...register('slug', {
                        required: true,
                        validate: (value) => !/\s/.test(value) || 'El slug no puede contener espacios',
                    })}
                    
                    className={
                        cn(
                            "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                            errors.slug ? 'border-red-500' : 'border-slate-300'
                        )
                    }
                    placeholder="Slug del producto"
                />
                    {errors.slug && <span className="text-red-500 text-sm">{errors.slug.message as string || 'Este campo es obligatorio'}</span>}
                </div>

                <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Género del producto
                </label>
                <select
                    {...register('gender')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                    <option value="men">Hombre</option>
                    <option value="women">Mujer</option>
                    <option value="unisex">Unisex</option>
                    <option value="kids">Niño</option>
                </select>
                </div>

                <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descripción del producto
                </label>
                <textarea
                    {...register('description', { required: true })}
                    rows={5}
                    className={
                        cn(
                            "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none",
                            errors.description ? 'border-red-500' : 'border-slate-300'
                        )
                    }
                    placeholder="Descripción del producto"
                />
                    {errors.description && <span className="text-red-500 text-sm">Este campo es obligatorio</span>}
                </div>
            </div>
        </div>
    )
}
