import { Eye, BarChart3 } from 'lucide-react'
import { type FC } from 'react'
const pageData = [
    { page: '/dashboard', views: 2847, change: '+12%' },
    { page: '/products', views: 1923, change: '+8%' },
    { page: '/analytics', views: 1456, change: '+15%' },
    { page: '/settings', views: 987, change: '-3%' },
];

const serviceData = [
    { service: 'API Server', status: 'Online', uptime: '99.9%', color: 'bg-green-500' },
    { service: 'Database', status: 'Online', uptime: '99.8%', color: 'bg-green-500' },
    { service: 'Cache Server', status: 'Warning', uptime: '98.2%', color: 'bg-yellow-500' },
    { service: 'CDN', status: 'Online', uptime: '99.9%', color: 'bg-green-500' },   
];

export const AdminAdditionalDashboardSection: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
          <Eye size={20} className="text-gray-400" />
        </div>
        <div className="space-y-3">
          {pageData.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-gray-900">{item.page}</p>
                <p className="text-sm text-gray-600">{item.views.toLocaleString()} views</p>
              </div>
              <span className={`text-sm font-medium ${
                item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
          <BarChart3 size={20} className="text-gray-400" />
        </div>
        <div className="space-y-4">
          {serviceData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <div>
                  <p className="font-medium text-gray-900">{item.service}</p>
                  <p className="text-sm text-gray-600">{item.status}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">{item.uptime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
