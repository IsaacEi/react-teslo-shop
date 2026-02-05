import { useState, type FC } from 'react'
import { AdminHeader } from '@/admin/components/AdminHeader';
import AdminSidebar from '@/admin/components/AdminSidebar';
import { Outlet } from 'react-router';

const AdminLayout: FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className=" bg-gray-50 flex">
      <AdminSidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;
