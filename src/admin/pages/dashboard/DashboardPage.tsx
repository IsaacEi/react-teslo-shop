import { AdminAdditionalDashboardSection } from '@/admin/components/AdminAdditionalDashboardSection';
import { AdminChartsActivitySection } from '@/admin/components/AdminChartsActivitySection';
import { AdminStatsGrid } from '@/admin/components/AdminStatsGrid';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { type FC } from 'react'

export const DashboardPage: FC = () => {
  return (
    <>
      {/* Welcome Section */}
      <AdminTitle title="Welcome back, John! 👋" subtitle="Here's what's happening with your business today." />

      {/* Stats Grid */}
      <AdminStatsGrid />

      {/* Charts and Activity Section */}
      <AdminChartsActivitySection />

      {/* Additional Dashboard Section */}
      <AdminAdditionalDashboardSection />    
    </>
  )
}
