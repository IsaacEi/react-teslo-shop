import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { Product } from '@/interfaces/product.interface';
import { currencyFormatter } from '@/lib/currency-formatter';
import { Pencil, Trash2 } from 'lucide-react'
import { type FC } from 'react'
import { Link } from 'react-router'

interface Props {
  products: Product[];
}

export const ProductsTable: FC<Props> = ({ products }) => {
    return (
        <Table className="bg-white p-10 shadow-md border border-gray-200 mb-10 mt-10 rounded-2xl">
            <TableHeader>
                <TableRow>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Inventario</TableHead>
                    <TableHead>Talla</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map(product => (
                    <TableRow key={product.id}>
                        <TableCell>
                            <img 
                                src={product.images[0]} 
                                alt={product.title} 
                                className="w-20 h-20 object-cover rounded-md" 
                            />
                        </TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{currencyFormatter(product.price,'es-ES','MXN')}</TableCell>
                        <TableCell>{product.gender}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.sizes.join(', ')}</TableCell>
                        <TableCell>
                        <div className='flex items-center justify-center gap-4'>
                            <Link to={`/admin/product/${product.id}`}>
                                <Pencil size={18} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                            </Link>
                            <Trash2 size={18} className="cursor-pointer text-gray-600 hover:text-gray-800" />
                        </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
