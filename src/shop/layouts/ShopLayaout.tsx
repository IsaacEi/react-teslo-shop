import { type FC } from 'react'
import { Outlet } from 'react-router'
import { CustomHeader } from '@/shop/components/CustomHeader'
import { CustomFooter } from '@/shop/components/CustomFooter'

export const ShopLayaout: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </div>
  )
}
