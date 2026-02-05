import { type FC } from 'react'
import { CustomJumbotron } from '@/shop/components/CustomJumbotron'
import { CustomPagination } from '@/components/customs/CustomPagination'
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { useProducts } from '@/shop/hooks/useProducts'

export const HomePage: FC = () => {

  const { data } = useProducts();
  
  return (
    <>
      <CustomJumbotron 
        title="Bienvenido a TESLA STYLE"
        subTitle="Descubre nuestra colección exclusiva de ropa y accesorios inspirados en Tesla. Calidad, estilo y tecnología en cada prenda."
      />

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}
