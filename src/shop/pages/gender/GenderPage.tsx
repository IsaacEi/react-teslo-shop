import { CustomPagination } from '@/components/customs/CustomPagination'
import { CustomJumbotron } from '@/shop/components/CustomJumbotron'
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { useProducts } from '@/shop/hooks/useProducts'
import { type FC } from 'react'
import { useParams } from 'react-router'

export const GenderPage: FC = () => {
  const { gender } = useParams();

  const { data } = useProducts();

  const genderMap: Record<string, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
  };

const genderLabel = genderMap[gender || 'unisex'];

  return (
    <>
      <CustomJumbotron 
        title={`Productos para ${genderLabel}`}
        subTitle="Descubre nuestra colección exclusiva de ropa y accesorios inspirados en Tesla. Calidad, estilo y tecnología en cada prenda."
      />

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}
