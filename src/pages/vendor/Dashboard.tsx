
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const VendorDashboard = () => {
  const stats = [
    { title: 'Total Products', value: '42', icon: Package, change: '+3 this week' },
    { title: 'Orders', value: '128', icon: ShoppingBag, change: '+12 this week' },
    { title: 'Revenue', value: '$3,240', icon: DollarSign, change: '+18% this month' },
    { title: 'Conversion', value: '3.2%', icon: TrendingUp, change: '+0.5% this week' }
  ];

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vendor Dashboard</h1>

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
                  <p className="text-xs text-green-600">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #ORD-001</p>
                    <p className="text-sm text-gray-600">Wireless Headphones</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$299.99</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #ORD-002</p>
                    <p className="text-sm text-gray-600">Smart Watch</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$149.99</p>
                    <p className="text-sm text-blue-600">Processing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Wireless Headphones</span>
                  <span className="font-medium">23 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart Watch</span>
                  <span className="font-medium">18 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Laptop Stand</span>
                  <span className="font-medium">15 sold</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorDashboard;
