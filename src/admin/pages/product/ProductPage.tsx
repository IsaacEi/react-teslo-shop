import { type FC } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/customs/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subtitle = id === 'new' ? 'Aquí puedes crear un nuevo producto.' : 'Aquí puedes editar el producto.';
  const { isLoading, isError, data: product, mutation } = useProduct(id || '');

  const handleSubmitProduct = async (productLike: Partial<Product> & { files?: File[] }) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success(`Producto ${ id === 'new' ? 'creado' : 'actualizado' } con éxito`, {
          duration: 4000,
          position: 'top-right',
          className: "bg-green-600 text-white border border-zinc-700 shadow-xl",
        });
        navigate(`/admin/product/${data.id}`, { replace: true });
      },

      onError: (_) => {
        toast.error('Error al guardar el producto', {
          duration: 4000,
          position: 'top-right',
          className: "bg-red-600 text-white border border-zinc-700 shadow-xl",
        });
      }
    });
  }

  if (isError) {
    return <Navigate to="/admin/products" replace />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if ( !product) {
    return <Navigate to="/admin/products" replace />;
  }

  return (
    <ProductForm title={title} subtitle={subtitle} product={product} isPending={mutation.isPending} onSubmit={handleSubmitProduct} />
  );
};