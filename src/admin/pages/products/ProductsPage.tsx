import { type FC } from 'react'
import { AdminTitle } from '@/admin/components/AdminTitle'
import { ProductsTable } from '@/admin/components/ProductsTable'
import { CustomPagination } from '@/components/customs/CustomPagination'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import { useProducts } from '@/shop/hooks/useProducts'

export const ProductsPage: FC = () => {
  const { data } = useProducts();
  return (
    <>
      <div className="flex items-center justify-between"> 
        <AdminTitle 
          title="Productos" 
          subtitle='Aqui puedes ver y administra tus productos' 
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link 
            to="/admin/product/new" 
          >
            <Button>
              <PlusIcon /> Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <ProductsTable products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 1} />
    </>
  )
}
