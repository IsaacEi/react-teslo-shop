import type { Product } from '@/interfaces/product.interface';
import { type FC } from 'react'
import type { UseFormWatch } from 'react-hook-form';
import type { FormInputs } from './ProductForm';

interface Props {
    product: Product;
    watch: UseFormWatch<FormInputs>
}

export const ProductStatus: FC<Props> = ({ product, watch }) => {
    const selelectedSizes = watch('sizes');
    const selelectedStock = watch('stock');
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Estado del producto
            </h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">
                        Estado
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Activo
                    </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">
                        Inventario
                    </span>
                    <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                        selelectedStock > 5
                            ? 'bg-green-100 text-green-800'
                            : selelectedStock > 0
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {selelectedStock}{' - '}
                        {selelectedStock > 5
                        ? 'En stock'
                        : selelectedStock > 0
                        ? 'Bajo stock'
                        : 'Sin stock'}
                    </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">
                        Imágenes
                    </span>
                    <span className="text-sm text-slate-600">
                        {product.images.length} imágenes
                    </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">
                        Tallas disponibles
                    </span>
                    <span className="text-sm text-slate-600">
                        {selelectedSizes.length} tallas
                    </span>
                </div>
            </div>
        </div>
    )
}
