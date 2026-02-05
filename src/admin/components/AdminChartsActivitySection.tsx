import { type FC } from 'react'
import { Chart } from '@/admin/components/Chart';
import { ActivityFeed } from '@/admin/components/ActivityFeed';
import { QuickActions } from '@/admin/components/QuickActions';

const chartData = [
  { label: 'Desktop', value: 65 },
  { label: 'Mobile', value: 28 },
  { label: 'Tablet', value: 7 },
];

const performanceData = [
  { label: 'Page Views', value: 24567 },
  { label: 'Sessions', value: 18234 },
  { label: 'Users', value: 12847 },
  { label: 'Bounce Rate', value: 23 },
];

export const AdminChartsActivitySection: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6">
            <Chart title="Traffic Sources" data={chartData} />
            <Chart title="Performance Metrics" data={performanceData} />
        </div>
        
        <div className="space-y-6">
            <ActivityFeed />
            <QuickActions />
        </div>
    </div>
  )
}
