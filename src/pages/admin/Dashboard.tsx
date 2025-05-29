
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '12,345', icon: Users, change: '+12%' },
    { title: 'Total Orders', value: '8,432', icon: ShoppingBag, change: '+18%' },
    { title: 'Revenue', value: '$125,432', icon: DollarSign, change: '+23%' },
    { title: 'Growth', value: '15.3%', icon: TrendingUp, change: '+5%' }
  ];

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600">{stat.change} from last month</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">New vendor registration</p>
                    <p className="text-sm text-gray-600">TechStore applied to become a vendor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Order completed</p>
                    <p className="text-sm text-gray-600">Order #ORD-1234 has been delivered</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                  Review pending vendor applications
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                  View recent orders
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                  Generate monthly report
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
